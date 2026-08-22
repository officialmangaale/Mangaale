<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import { X, AlertCircle, Download } from 'lucide-react';
import useApkDownload from '../../hooks/useApkDownload';

const AppUpdateNotification = ({ updateAvailable, latestVersion, onDismiss }) => {
  const [isVisible, setIsVisible] = useState(updateAvailable);
  const { downloadApk } = useApkDownload();
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6

  const handleDismiss = () => {
    setDismissed(true)
    onDismiss?.()
  }

<<<<<<< HEAD
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

=======
  if (!isVisible || !updateAvailable) return null;

  return (
    <div className="fixed top-[76px] left-0 right-0 z-40 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-r from-mangaale-primary to-mangaale-secondary text-white rounded-2xl shadow-lg p-4 md:p-5 flex items-start gap-4">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-bold text-[15px]">Update Available</h3>
            <p className="text-white/80 text-sm mt-1">
              Mangaale v{latestVersion?.version} is now available. Get new features and improvements!
            </p>
            <div className="flex gap-2.5 mt-3">
              <button
                onClick={() => downloadApk()}
                className="mangaale-button bg-white text-mangaale-primary hover:shadow-md text-sm px-3 py-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                Download Now
              </button>
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
              <button
                type="button"
                onClick={handleDismiss}
<<<<<<< HEAD
                className="shrink-0 rounded-lg p-1 transition-colors hover:bg-white/20"
                aria-label="Close notification"
=======
                className="px-3 py-1.5 bg-white/15 hover:bg-white/25 rounded-xl font-semibold text-sm transition-colors"
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
<<<<<<< HEAD
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AppUpdateNotification
=======
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 p-1.5 hover:bg-white/15 rounded-xl transition-colors"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppUpdateNotification;
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
