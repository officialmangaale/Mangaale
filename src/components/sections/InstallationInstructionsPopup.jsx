import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle, Download, X } from 'lucide-react'
import { appInfo, downloadLinks } from '../../data/appData'

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
  const [activeStep, setActiveStep] = useState(0)

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
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

export default InstallationInstructionsPopup
