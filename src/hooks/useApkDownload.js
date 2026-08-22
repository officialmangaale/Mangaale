import { useState, useCallback } from 'react';

const APK_API_URL = 'https://user-prod.mangaale.com/app/latest';

/**
 * Hook to fetch the latest APK download URL from the API and trigger download.
 * API returns: { data: { app: { app_url: "https://...s3...apk" } } }
 */
const useApkDownload = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const downloadApk = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(APK_API_URL);
      if (!response.ok) throw new Error('Failed to fetch APK download link');

      const result = await response.json();
      const apkUrl = result?.data?.app?.app_url;

      if (!apkUrl) throw new Error('APK URL not found in response');

      // Trigger download by opening the S3 URL
      window.open(apkUrl, '_blank');
      return apkUrl;
    } catch (err) {
      console.error('APK download error:', err);
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return { downloadApk, loading, error };
};

export default useApkDownload;
