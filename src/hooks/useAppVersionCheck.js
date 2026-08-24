import { useCallback, useEffect, useState } from 'react'

const VERSION_URL = '/downloads/mangaale/version-info.json'
const SEEN_KEY = 'mangaale_app_version'
const LAST_CHECK_KEY = 'mangaale_last_check'
const DISMISSED_KEY = 'mangaale_update_dismissed'

/** localStorage can throw in private mode / when storage is disabled. */
const safeGet = (key) => {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

const safeSet = (key, value) => {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* storage unavailable — the feature simply degrades to "no banner" */
  }
}

/**
 * Checks the published version manifest for a newer app build.
 *
 * Previously this only flagged an update when `mangaale_app_version` was
 * already in localStorage — but nothing ever wrote that key, so the banner
 * could never fire. The first successful check now records the version it saw,
 * and later checks compare against it.
 */
const useAppVersionCheck = () => {
  const [updateAvailable, setUpdateAvailable] = useState(false)
  const [latestVersion, setLatestVersion] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const checkForUpdates = useCallback(async (signal) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(VERSION_URL, { cache: 'no-cache', signal })
      if (!response.ok) throw new Error('Failed to fetch version info')

      /*
       * The manifest is a static file, and both hosts in this repo fall back to
       * index.html for unknown paths (nginx `try_files ... /index.html`,
       * vercel.json's catch-all rewrite). So when no manifest has been
       * published the request comes back 200 with an HTML body rather than a
       * 404, and response.json() blows up on "<!doctype html>".
       *
       * Checking the content type turns that into a clean "nothing published
       * yet" instead of a parse error every time.
       */
      const contentType = response.headers.get('content-type') || ''
      if (!contentType.includes('json')) {
        throw new Error('No version manifest is published at ' + VERSION_URL)
      }

      const data = await response.json()
      const latest = data?.latest
      if (!latest?.version) throw new Error('Version manifest is missing a latest version')

      setLatestVersion(latest)

      const seen = safeGet(SEEN_KEY)

      if (!seen) {
        // First visit: remember the current version, don't nag straight away.
        safeSet(SEEN_KEY, latest.version)
      } else if (seen !== latest.version && safeGet(DISMISSED_KEY) !== latest.version) {
        setUpdateAvailable(true)
      }
    } catch (err) {
      if (err?.name === 'AbortError') return
      // Non-fatal: the site works fine without the update banner.
      setError(err?.message || 'Version check failed')
    } finally {
      /*
       * Record the attempt whether or not it succeeded.
       *
       * This used to be written only on the success path. `version-info.json`
       * is not published yet, so the check always failed, the timestamp was
       * never written, and `hoursSince` was permanently Infinity — meaning
       * this uncached request fired again on every single page load, for every
       * visitor, forever. Backing off on failure too makes it one request per
       * 24h as intended.
       */
      safeSet(LAST_CHECK_KEY, new Date().toISOString())
      setLoading(false)
    }
  }, [])

  /** Hides the banner and remembers the choice for this version. */
  const dismissUpdate = useCallback(() => {
    setUpdateAvailable(false)
    if (latestVersion?.version) {
      safeSet(DISMISSED_KEY, latestVersion.version)
      safeSet(SEEN_KEY, latestVersion.version)
    }
  }, [latestVersion])

  useEffect(() => {
    const lastCheck = safeGet(LAST_CHECK_KEY)
    const lastCheckTime = lastCheck ? new Date(lastCheck).getTime() : 0
    const hoursSince = (Date.now() - lastCheckTime) / (1000 * 60 * 60)

    if (hoursSince <= 24) return undefined

    // Cancel in flight if the layout unmounts, so the response can never land
    // on an unmounted component.
    const controller = new AbortController()
    checkForUpdates(controller.signal)
    return () => controller.abort()
  }, [checkForUpdates])

  return { updateAvailable, latestVersion, loading, error, checkForUpdates, dismissUpdate }
}

export default useAppVersionCheck
