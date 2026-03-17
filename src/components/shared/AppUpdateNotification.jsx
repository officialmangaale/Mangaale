import React, { useState } from 'react';
import { X, AlertCircle, Download } from 'lucide-react';
import { downloadLinks } from '../../data/appData';

/**
 * Component to notify users about app updates
 * Shows as a banner at the top of the page when an update is available
 */
const AppUpdateNotification = ({ updateAvailable, latestVersion, onDismiss }) => {
  const [isVisible, setIsVisible] = useState(updateAvailable);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  const handleDownload = () => {
    // Open download in new tab with installation instructions
    window.open(downloadLinks.apk, '_blank');
  };

  if (!isVisible || !updateAvailable) return null;

  return (
    <div className="fixed top-20 md:top-24 left-0 right-0 z-40 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-lg p-4 md:p-5 flex items-start gap-4">
          {/* Icon */}
          <AlertCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5" />

          {/* Content */}
          <div className="flex-1">
            <h3 className="font-bold text-base md:text-lg">Update Available</h3>
            <p className="text-blue-100 text-sm mt-1">
              Mangaale v{latestVersion?.version} is now available. Get new features and improvements!
            </p>
            <div className="flex gap-3 mt-3">
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-3 py-1.5 bg-white text-blue-600 rounded font-semibold text-sm hover:bg-blue-50 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Now
              </button>
              <button
                onClick={handleDismiss}
                className="px-3 py-1.5 bg-blue-500 hover:bg-blue-700 rounded font-semibold text-sm transition-colors"
              >
                Dismiss
              </button>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 p-1 hover:bg-blue-700 rounded transition-colors"
            aria-label="Close notification"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppUpdateNotification;
