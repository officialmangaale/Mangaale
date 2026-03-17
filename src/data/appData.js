// App download and version information
export const appInfo = {
  name: 'Mangaale',
  version: '1.0.0',
  size: '77 MB',
  platform: 'Android',
  lastUpdated: 'March 2026',
  description: 'Order from nearby restaurants, scan QR menus, and get fast delivery directly from the Mangaale app.',
  minAndroidVersion: '7.0',
  rating: 4.8,
  downloads: '50K+',
  minInstallationStepsAndroid: [
    {
      step: 1,
      title: 'Tap Download APK',
      description: 'Click the download button below to get the latest Mangaale app.'
    },
    {
      step: 2,
      title: 'Open the downloaded file',
      description: 'Look for the downloaded file in your notifications or downloads folder.'
    },
    {
      step: 3,
      title: 'Allow Unknown App Installation',
      description: 'If your phone blocks installation, go to Settings > Apps > Enable Installation from Unknown Sources.'
    },
    {
      step: 4,
      title: 'Tap Install',
      description: 'Proceed with the installation process when prompted.'
    },
    {
      step: 5,
      title: 'Open Mangaale App',
      description: 'Once installed, tap Open or find Mangaale in your app drawer to start using it.'
    }
  ]
};

export const downloadLinks = {
  apk: '/downloads/mangaale/mangaale-latest.apk',
  playStore: 'https://play.google.com/store/apps/details?id=com.mangaale.app', // Coming soon
  appStore: 'https://apps.apple.com/app/mangaale', // Coming soon
};

export const appFeatures = [
  {
    title: 'Fast Delivery',
    description: 'Get your food delivered in 30 minutes or less'
  },
  {
    title: 'QR Menu Scanning',
    description: 'Instantly scan restaurant menus with your camera'
  },
  {
    title: 'Real-time Tracking',
    description: 'Track your delivery in real-time on the map'
  },
  {
    title: 'Easy Payments',
    description: 'Multiple payment options for seamless checkout'
  },
  {
    title: 'Exclusive Deals',
    description: 'Get special offers and rewards for app users'
  },
  {
    title: '24/7 Support',
    description: 'Customer support available round the clock'
  }
];
