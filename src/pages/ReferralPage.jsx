import { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { looksLikeReferralCode, normalizeReferralCode, referralProgramCopy } from '../data/referralPrograms'

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:8082').replace(/\/$/, '')

/**
 * The page behind a shared referral link: https://mangaale.com/r/<code>
 *
 * Everything about the offer comes from the server
 * (GET /referrals/resolve/:code). This page never decides whether a code is
 * valid or what a programme pays — a landing page is public, so anything it
 * could work out for itself, a stranger could too.
 *
 * Three outcomes are kept apart on purpose:
 *
 *   valid                the invite, with a way to continue
 *   invalid_or_expired   a friendly dead end, no retry offered
 *   unavailable          the service could not be reached — offer a retry
 *
 * Collapsing the last two would tell someone their invite is dead when the
 * network merely hiccupped.
 */
const ReferralPage = () => {
  const { code: rawCode } = useParams()
  const code = normalizeReferralCode(rawCode)

  const [status, setStatus] = useState('loading')
  const [resolved, setResolved] = useState(null)
  const [copied, setCopied] = useState(false)
  const [attempt, setAttempt] = useState(0)

  // A referral link is per-person and endless in number; it has no business in
  // search results. siteRoutes.js deliberately omits /r/, so it is absent from
  // the sitemap too.
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    return () => meta.remove()
  }, [])

  useEffect(() => {
    if (!looksLikeReferralCode(code)) {
      setStatus('invalid')
      return undefined
    }

    let cancelled = false
    setStatus('loading')

    const load = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/referrals/resolve/${encodeURIComponent(code)}`, {
          headers: { Accept: 'application/json' }
        })
        if (!response.ok) throw new Error(`resolve failed: ${response.status}`)

        const body = await response.json()
        // The service wraps payloads as { status, message, data }.
        const data = body?.data ?? body
        if (cancelled) return

        setResolved(data)
        setStatus(data?.valid ? 'valid' : 'invalid')
      } catch {
        // A thrown error is a transport failure, not a rejected code: the
        // endpoint answers 200 for unknown codes.
        if (!cancelled) setStatus('unavailable')
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [code, attempt])

  const copyCode = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard can be refused — the code is on screen to type */
    }
  }, [code])

  if (status === 'loading') {
    return (
      <Shell>
        <div className="flex flex-col items-center gap-4 py-10" role="status" aria-live="polite">
          <span className="h-8 w-8 animate-spin rounded-full border-2 border-mangaale-border border-t-mangaale-primary" />
          <p className="text-mangaale-subtext">Checking your invite…</p>
        </div>
      </Shell>
    )
  }

  if (status === 'unavailable') {
    return (
      <Shell>
        <p className="section-eyebrow inline-block">Invite</p>
        <h1 className="mt-6 text-4xl font-bold text-mangaale-text">Could not check this invite</h1>
        <p className="mt-4 text-mangaale-subtext">
          We could not reach Mangaale just now. Your invite may still be fine.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button type="button" className="mangaale-button-primary" onClick={() => setAttempt((n) => n + 1)}>
            Try again
          </button>
          <Link to="/" className="mangaale-button-secondary">Back to Home</Link>
        </div>
      </Shell>
    )
  }

  if (status === 'invalid') {
    return (
      <Shell>
        <p className="section-eyebrow inline-block">Invite</p>
        <h1 className="mt-6 text-4xl font-bold text-mangaale-text">This invite is no longer active</h1>
        <p className="mt-4 text-mangaale-subtext">
          {resolved?.message || 'This referral link is no longer active.'}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/download" className="mangaale-button-primary">Get the app</Link>
          <Link to="/" className="mangaale-button-secondary">Back to Home</Link>
        </div>
      </Shell>
    )
  }

  const copy = referralProgramCopy(resolved?.program)

  return (
    <Shell>
      <p className="section-eyebrow inline-block">You have been invited</p>
      <h1 className="mt-6 text-4xl font-bold text-mangaale-text sm:text-5xl">
        {resolved?.title || copy.heading}
      </h1>
      <p className="mt-4 text-mangaale-subtext">{resolved?.message || copy.blurb}</p>

      {resolved?.reward_summary ? (
        <p className="mt-6 inline-block rounded-2xl bg-mangaale-bg-soft px-5 py-3 font-semibold text-mangaale-text">
          {resolved.reward_summary}
        </p>
      ) : null}

      <div className="mangaale-card mx-auto mt-8 max-w-sm px-6 py-5">
        <p className="text-xs font-bold uppercase tracking-widest text-mangaale-subtext">Your invite code</p>
        <p className="mt-2 font-mono text-3xl font-bold tracking-[0.25em] text-mangaale-text">
          {resolved?.code || code}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {resolved?.app_link ? (
          <a href={resolved.app_link} className="mangaale-button-primary">Open in the app</a>
        ) : null}
        <Link to="/download" className={resolved?.app_link ? 'mangaale-button-secondary' : 'mangaale-button-primary'}>
          {copy.ctaLabel}
        </Link>
        <button type="button" className="mangaale-button-secondary" onClick={copyCode}>
          {copied ? 'Code copied' : 'Copy code'}
        </button>
      </div>

      <p className="mt-8 text-sm text-mangaale-subtext">
        Enter this code when you create your account.{' '}
        <Link to={copy.learnMore} className="font-semibold text-mangaale-primary underline">
          Learn more
        </Link>
      </p>
    </Shell>
  )
}

const Shell = ({ children }) => (
  <div className="mx-auto w-[92%] max-w-3xl py-28 text-center sm:py-36">{children}</div>
)

export default ReferralPage
