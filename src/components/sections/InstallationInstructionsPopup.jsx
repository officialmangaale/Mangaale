<<<<<<< HEAD
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle, Download, X } from 'lucide-react'
import { appInfo, downloadLinks } from '../../data/appData'
=======
import React, { useState } from 'react';
import { X, Download, CheckCircle, Loader2 } from 'lucide-react';
import { appInfo } from '../../data/appData';
import useApkDownload from '../../hooks/useApkDownload';
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6

/**
 * Install instructions modal.
 *
 * Behaviour preserved from the original (open/close, step selection, the
 * "I already have it" shortcut). Fixes applied:
 *  - the download href now comes from `downloadLinks.apk`, which points at the
 *    APK that actually exists; it previously 404'd
 *  - rendered through a portal so it is never clipped by a transformed parent
 *  - Escape closes, background scroll is locked, focus starts inside the dialog
 */
const InstallationInstructionsPopup = ({ isOpen, onClose }) => {
<<<<<<< HEAD
  const [activeStep, setActiveStep] = useState(0)
=======
  const [activeStep, setActiveStep] = useState(0);
  const { downloadApk, loading: apkLoading, error: apkError } = useApkDownload();
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6

  useEffect(() => {
    if (!isOpen) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

<<<<<<< HEAD
  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="install-title"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-mangaale-navy/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-white shadow-lift"
          >
            {/* header */}
            <div className="relative flex shrink-0 items-start justify-between gap-4 bg-gradient-to-br from-mangaale-primary to-mangaale-secondary p-5 text-white sm:p-6">
              <div>
                <h2 id="install-title" className="flex items-center gap-2 text-[1.25rem] font-extrabold sm:text-[1.5rem]">
                  <Download className="h-5 w-5" />
                  How to Install Mangaale
                </h2>
                <p className="mt-1 text-[0.88rem] text-white/85">
                  Follow these steps to get started
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                autoFocus
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-white/20"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* download bar */}
            <div className="flex shrink-0 flex-col gap-2.5 border-b border-mangaale-border bg-mangaale-tint px-5 py-4 sm:flex-row sm:px-6">
              <a
                href={downloadLinks.apk}
                download
                className="mangaale-button-primary flex-1"
              >
                <Download className="h-[18px] w-[18px]" />
                Download APK Now
              </a>
              <button type="button" onClick={onClose} className="mangaale-button-secondary">
                I Already Have It
              </button>
            </div>

            {/* scrollable body */}
            <div className="min-h-0 flex-1 overflow-y-auto p-5 sm:p-6">
              {/* app meta */}
              <div className="grid grid-cols-2 gap-3 rounded-2xl bg-mangaale-tint p-4 text-center sm:grid-cols-4">
                {[
                  ['Version', appInfo.version],
                  ['Size', appInfo.size],
                  ['Platform', appInfo.platform],
                  ['Updated', appInfo.lastUpdated]
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-[1rem] font-extrabold text-mangaale-primary">{value}</p>
                    <p className="mt-0.5 text-[0.75rem] text-mangaale-subtext">{label}</p>
                  </div>
                ))}
              </div>

              <h3 className="mb-3 mt-6 text-[1rem] font-extrabold text-mangaale-text">
                Installation Steps
              </h3>

              <div className="space-y-2">
                {appInfo.minInstallationStepsAndroid.map((step, index) => {
                  const isActive = activeStep === index
                  return (
                    <button
                      key={step.step}
                      type="button"
                      onClick={() => setActiveStep(index)}
                      aria-expanded={isActive}
                      className={`flex w-full gap-3.5 rounded-2xl p-3.5 text-left transition-colors ${
                        isActive
                          ? 'border-l-4 border-mangaale-primary bg-mangaale-tint'
                          : 'border-l-4 border-transparent hover:bg-mangaale-tint/60'
                      }`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[0.85rem] font-bold transition-colors ${
                          isActive
                            ? 'bg-mangaale-primary text-white'
                            : 'bg-mangaale-border text-mangaale-subtext'
                        }`}
                      >
                        {isActive ? <CheckCircle className="h-5 w-5" /> : step.step}
                      </span>
                      <span className="flex-1">
                        <span className="block text-[0.94rem] font-bold text-mangaale-text">
                          {step.title}
                        </span>
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.span
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                              className="block overflow-hidden text-[0.86rem] leading-relaxed text-mangaale-subtext"
                            >
                              <span className="block pt-1">{step.description}</span>
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </span>
                    </button>
                  )
                })}
              </div>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-[0.85rem] leading-relaxed text-amber-900">
                  <strong>Note:</strong> If you don&apos;t see the &ldquo;Install Unknown Apps&rdquo;
                  option, go to Settings &gt; Apps &amp; notifications &gt; Special app access &gt;
                  Install unknown apps, and allow your browser.
                </p>
              </div>
=======
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="mangaale-card shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-mangaale-primary to-mangaale-secondary text-white p-5 md:p-6 flex justify-between items-center z-10 rounded-t-2xl">
          <div>
            <h2 className="text-lg md:text-xl font-bold flex items-center gap-2">
              <Download className="w-5 h-5" />
              How to Install Mangaale
            </h2>
            <p className="text-white/70 text-sm mt-1">Follow these simple steps to get started</p>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white hover:bg-white/10 rounded-xl p-2 transition-all"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Download Button Bar */}
        <div className="bg-mangaale-bg-soft border-b border-gray-100 px-5 md:px-6 py-4">
          <div className="flex gap-3">
            <button
              onClick={downloadApk}
              disabled={apkLoading}
              className="mangaale-button-primary flex-1 py-3 disabled:opacity-60 disabled:cursor-wait disabled:hover:translate-y-0"
              title="Download Mangaale APK"
            >
              {apkLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Fetching Download…
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  Download APK Now
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="mangaale-button-secondary py-3 px-5"
            >
              I Already Have It
            </button>
          </div>
          {apkError && (
            <p className="text-red-600 text-sm text-center mt-2">
              ⚠️ {apkError}. Please try again.
            </p>
          )}
        </div>

        {/* Content */}
        <div className="p-5 md:p-6">
          {/* App Info */}
          <div className="mangaale-card bg-mangaale-bg-soft p-4 mb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { label: 'Version', value: appInfo.version },
                { label: 'Size', value: appInfo.size },
                { label: 'Platform', value: appInfo.platform },
                { label: 'Updated', value: appInfo.lastUpdated },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-display text-base font-extrabold text-mangaale-primary">{item.value}</p>
                  <p className="text-mangaale-subtext text-xs mt-0.5">{item.label}</p>
                </div>
              ))}
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

<<<<<<< HEAD
export default InstallationInstructionsPopup
=======
          {/* Installation Steps */}
          <div className="space-y-2.5">
            <h3 className="text-base font-bold text-mangaale-text mb-4">Installation Steps</h3>

            {appInfo.minInstallationStepsAndroid.map((step, index) => (
              <div
                key={step.step}
                className={`cursor-pointer transition-all rounded-xl p-4 ${
                  activeStep === index
                    ? 'bg-mangaale-primary/5 border border-mangaale-primary/20'
                    : 'hover:bg-gray-50 border border-transparent'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-start gap-3.5">
                  <div className={`flex-shrink-0 flex items-center justify-center h-9 w-9 rounded-xl transition-all ${
                    activeStep === index
                      ? 'bg-gradient-to-br from-mangaale-primary to-mangaale-secondary text-white'
                      : 'bg-gray-100 text-mangaale-subtext'
                  }`}>
                    {activeStep === index ? (
                      <CheckCircle className="h-4.5 w-4.5" />
                    ) : (
                      <span className="font-bold text-sm">{step.step}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-mangaale-text text-[15px] mb-0.5">
                      {step.title}
                    </h4>
                    {activeStep === index && (
                      <p className="text-mangaale-subtext text-sm leading-relaxed mt-1">
                        {step.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mangaale-card bg-amber-50 border-amber-200 p-4 mt-6">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Note:</strong> If you don't see the "Install Unknown Apps" option,
              go to Settings &gt; Apps &amp; notifications &gt; Special app access &gt;
              Install unknown apps and grant permission to your browser.
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full mt-6 mangaale-button bg-mangaale-text text-white hover:bg-gray-900 py-3"
          >
            Close & Open Instructions Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallationInstructionsPopup;
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
