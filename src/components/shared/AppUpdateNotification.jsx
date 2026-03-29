import React, { useState } from 'react';
import { X, AlertCircle, Download } from 'lucide-react';
import useApkDownload from '../../hooks/useApkDownload';

const AppUpdateNotification = ({ updateAvailable, latestVersion, onDismiss }) => {
  const [isVisible, setIsVisible] = useState(updateAvailable);
  const { downloadApk } = useApkDownload();

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

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
              <button
                onClick={handleDismiss}
                className="px-3 py-1.5 bg-white/15 hover:bg-white/25 rounded-xl font-semibold text-sm transition-colors"
              >
                Dismiss
              </button>
            </div>
          </div>
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
