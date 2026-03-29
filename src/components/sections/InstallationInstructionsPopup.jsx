import React, { useState } from 'react';
import { X, Download, CheckCircle, Loader2 } from 'lucide-react';
import { appInfo } from '../../data/appData';
import useApkDownload from '../../hooks/useApkDownload';

const InstallationInstructionsPopup = ({ isOpen, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const { downloadApk, loading: apkLoading, error: apkError } = useApkDownload();

  if (!isOpen) return null;

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
            </div>
          </div>

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
