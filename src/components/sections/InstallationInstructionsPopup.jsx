import React, { useState } from 'react';
import { X, Download, CheckCircle } from 'lucide-react';
import { appInfo } from '../../data/appData';

const InstallationInstructionsPopup = ({ isOpen, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-orange-600 to-orange-500 text-white p-6 flex justify-between items-center z-10">
          <div>
            <h2 className="text-2xl font-bold">
              <Download className="inline-block mr-2 h-6 w-6" />
              How to Install the Mangaale App
            </h2>
            <p className="text-orange-100 mt-1">Follow these simple steps to get started</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-orange-600 rounded-full p-2 transition"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Download Button Bar */}
        <div className="bg-orange-50 border-b border-orange-200 px-8 py-4 flex gap-3">
          <a
            href="/downloads/mangaale/mangaale-latest.apk"
            download="mangaale-app.apk"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold rounded-lg hover:shadow-lg transition-all hover:scale-105"
            title="Download Mangaale APK"
          >
            <Download className="w-5 h-5" />
            Download APK Now
          </a>
          <button
            onClick={onClose}
            className="px-6 py-3 bg-white text-orange-600 font-bold rounded-lg hover:bg-orange-100 transition"
          >
            I Already Have It
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* App Info */}
          <div className="bg-orange-50 rounded-lg p-4 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-orange-600 font-bold text-lg">{appInfo.version}</p>
                <p className="text-gray-600 text-sm">Version</p>
              </div>
              <div>
                <p className="text-orange-600 font-bold text-lg">{appInfo.size}</p>
                <p className="text-gray-600 text-sm">Size</p>
              </div>
              <div>
                <p className="text-orange-600 font-bold text-lg">{appInfo.platform}</p>
                <p className="text-gray-600 text-sm">Platform</p>
              </div>
              <div>
                <p className="text-orange-600 font-bold text-lg">{appInfo.lastUpdated}</p>
                <p className="text-gray-600 text-sm">Last Updated</p>
              </div>
            </div>
          </div>

          {/* Installation Steps */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-800 mb-6">Installation Steps</h3>
            
            {appInfo.minInstallationStepsAndroid.map((step, index) => (
              <div
                key={step.step}
                className={`cursor-pointer transition-all ${
                  activeStep === index
                    ? 'bg-orange-50 border-l-4 border-orange-600'
                    : 'hover:bg-gray-50'
                } p-4 rounded-lg`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full transition-all ${
                    activeStep === index
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    {activeStep === index ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      <span className="font-bold">{step.step}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-base mb-1">
                      {step.title}
                    </h4>
                    {activeStep === index && (
                      <p className="text-gray-600 text-sm transition-all">
                        {step.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Important Note */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-8">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> If you don't see the "Install Unknown Apps" option,
              you can go to Settings &gt; Apps &amp; notifications &gt; Special app access &gt;
              Install unknown apps and grant permission to your browser.
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full mt-8 bg-gray-800 text-white py-3 rounded-lg font-bold hover:bg-gray-900 transition"
          >
            Close & Open Instructions Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallationInstructionsPopup;
