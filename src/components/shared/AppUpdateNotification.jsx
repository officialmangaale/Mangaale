import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AlertCircle, Download, X } from 'lucide-react'
import { downloadLinks } from '../../data/appData'

/**
 * Update banner shown when a newer app version is published.
 *
 * Fix: `isVisible` used to be initialised from `updateAvailable`, which is
 * false on first render because the version check is async. The state never
 * resynced, so the banner could never appear. It now tracks the prop and only
 * stays hidden once the user actually dismisses it.
 */
const AppUpdateNotification = ({ updateAvailable, latestVersion, onDismiss }) => {
  const [dismissed, setDismissed] = useState(false)

  // A newer version arriving should be able to re-open the banner
  useEffect(() => {
    if (updateAvailable) setDismissed(false)
  }, [updateAvailable, latestVersion?.version])

  const handleDismiss = () => {
    setDismissed(true)
    onDismiss?.()
  }

  const show = Boolean(updateAvailable) && !dismissed

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 top-[4.5rem] z-40 px-4 lg:top-[5.5rem]"
          role="status"
          aria-live="polite"
        >
          <div className="mx-auto max-w-2xl">
            <div className="flex items-start gap-3 rounded-2xl bg-gradient-to-r from-mangaale-primary to-mangaale-secondary p-4 text-white shadow-lift">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />

              <div className="min-w-0 flex-1">
                <h3 className="text-[0.98rem] font-bold">Update Available</h3>
                <p className="mt-0.5 text-[0.85rem] text-white/85">
                  Mangaale v{latestVersion?.version} is now available with new features and
                  improvements.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href={downloadLinks.apk}
                    download
                    className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-[0.83rem] font-bold text-mangaale-primary transition-colors hover:bg-mangaale-tint"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download Now
                  </a>
                  <button
                    type="button"
                    onClick={handleDismiss}
                    className="rounded-lg bg-white/20 px-3 py-1.5 text-[0.83rem] font-bold transition-colors hover:bg-white/30"
                  >
                    Dismiss
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={handleDismiss}
                className="shrink-0 rounded-lg p-1 transition-colors hover:bg-white/20"
                aria-label="Close notification"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AppUpdateNotification
