import { useState, useEffect } from 'react';

/**
 * Hook to check for app updates
 * Can be used to show update notifications to users
 */
const useAppVersionCheck = () => {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [latestVersion, setLatestVersion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkForUpdates = async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch version info from the version-info.json
      const response = await fetch('/downloads/mangaale/version-info.json');
      if (!response.ok) throw new Error('Failed to fetch version info');
      
      const data = await response.json();
      const latestVersionInfo = data.latest;
      
      setLatestVersion(latestVersionInfo);

      // Check if update is available
      // In a real app, this would check against the installed app version
      // For now, we're just setting it based on localStorage or session storage
      const lastCheckedVersion = localStorage.getItem('mangaale_app_version');
      
      if (lastCheckedVersion && lastCheckedVersion !== latestVersionInfo.version) {
        setUpdateAvailable(true);
      }

      // Store the checked version
      localStorage.setItem('mangaale_last_check', new Date().toISOString());
    } catch (err) {
      console.error('Version check error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Auto-check on mount
  useEffect(() => {
    // Check if last check was more than 24 hours ago
    const lastCheck = localStorage.getItem('mangaale_last_check');
    const now = new Date().getTime();
    const lastCheckTime = lastCheck ? new Date(lastCheck).getTime() : 0;
    const hoursSinceLastCheck = (now - lastCheckTime) / (1000 * 60 * 60);

    if (hoursSinceLastCheck > 24) {
      checkForUpdates();
    }
  }, []);

  return {
    updateAvailable,
    latestVersion,
    loading,
    error,
    checkForUpdates
  };
};

export default useAppVersionCheck;
