import React, { useState } from 'react';
import { Download, Apple, CheckCircle2, Shield, Zap, Clock } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import InstallationInstructionsPopup from '../components/sections/InstallationInstructionsPopup';
import { appInfo, downloadLinks, appFeatures } from '../data/appData';

const DownloadPage = () => {
  const [showInstallPopup, setShowInstallPopup] = useState(false);

  usePageMeta(
    'Download Mangaale App - Fast Food Delivery',
    'Download Mangaale app for Android. Order food, scan QR menus, get real-time delivery tracking. Available on Android now, iOS coming soon.'
  );

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-500 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Download Mangaale App
            </h1>
            <p className="text-lg md:text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Get your favorite food delivered fast. Order from nearby restaurants, scan QR menus, and track your delivery in real-time.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowInstallPopup(true)}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-all hover:shadow-lg"
              >
                <Download className="w-6 h-6" />
                Download for Android
              </button>
              <button
                disabled
                className="flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 text-white font-bold rounded-xl border-2 border-white opacity-60 cursor-not-allowed"
              >
                <Apple className="w-6 h-6" />
                Coming Soon on iOS
              </button>
            </div>

            {/* Version Info */}
            <div className="mt-8 inline-block bg-white bg-opacity-20 rounded-lg px-6 py-3">
              <p className="text-sm text-orange-100">
                📱 Version {appInfo.version} • 📦 {appInfo.size} • 🔒 Secure Download
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Column - Features */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Why Download Mangaale?
              </h2>

              <div className="space-y-6">
                {appFeatures.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="bg-orange-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                By the Numbers
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                    {appInfo.rating}⭐
                  </p>
                  <p className="text-gray-700">Average Rating</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                    {appInfo.downloads}
                  </p>
                  <p className="text-gray-700">Downloads</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                    &lt;30 mins
                  </p>
                  <p className="text-gray-700">Average Delivery Time</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                    24/7
                  </p>
                  <p className="text-gray-700">Customer Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* App Information Detailed */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              App Information
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-sm text-gray-600 mb-2">VERSION</p>
                <p className="text-2xl font-bold text-orange-600">{appInfo.version}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">SIZE</p>
                <p className="text-2xl font-bold text-orange-600">{appInfo.size}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">PLATFORM</p>
                <p className="text-2xl font-bold text-orange-600">{appInfo.platform}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">MIN ANDROID</p>
                <p className="text-2xl font-bold text-orange-600">{appInfo.minAndroidVersion}+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Steps Section */}
      <section className="bg-orange-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              How to Install
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {appInfo.minInstallationStepsAndroid.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="bg-gradient-to-br from-orange-600 to-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={() => setShowInstallPopup(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg transition-all hover:scale-105"
              >
                <Download className="w-6 h-6" />
                Download Now & Install
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Trust Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Security & Safety
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border-2 border-orange-100 hover:border-orange-300 transition-colors">
                <Shield className="w-12 h-12 text-orange-600 mb-4" />
                <h4 className="font-bold text-gray-900 mb-3">HTTPS Protected</h4>
                <p className="text-gray-600 text-sm">
                  All downloads are secured with HTTPS encryption for your safety.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-orange-100 hover:border-orange-300 transition-colors">
                <Zap className="w-12 h-12 text-orange-600 mb-4" />
                <h4 className="font-bold text-gray-900 mb-3">Fast CDN</h4>
                <p className="text-gray-600 text-sm">
                  Download quickly with our optimized content delivery network.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-orange-100 hover:border-orange-300 transition-colors">
                <Clock className="w-12 h-12 text-orange-600 mb-4" />
                <h4 className="font-bold text-gray-900 mb-3">Regular Updates</h4>
                <p className="text-gray-600 text-sm">
                  We release regular updates with security patches and new features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <details className="bg-white rounded-lg p-6 border border-gray-200 group">
                <summary className="font-bold text-gray-900 cursor-pointer flex items-center justify-between">
                  What is the minimum Android version required?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-4">
                  Mangaale requires Android 7.0 or higher. Make sure your device is running Android 7.0 or a newer version.
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 border border-gray-200 group">
                <summary className="font-bold text-gray-900 cursor-pointer flex items-center justify-between">
                  How much storage space does the app need?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-4">
                  The app is approximately {appInfo.size}, so make sure you have enough free space on your device.
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 border border-gray-200 group">
                <summary className="font-bold text-gray-900 cursor-pointer flex items-center justify-between">
                  Is my download data safe?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-4">
                  Yes, all downloads are secured with HTTPS encryption and hosted on secure servers. Your data is protected.
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 border border-gray-200 group">
                <summary className="font-bold text-gray-900 cursor-pointer flex items-center justify-between">
                  What if I allow "Install Unknown Apps"?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-4">
                  This is a normal Android security feature. You're allowing your browser/file manager to install the app. This is safe for our APK from our official server.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Order?
          </h2>
          <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
            Download Mangaale today and start ordering from your favorite restaurants!
          </p>
          <button
            onClick={() => setShowInstallPopup(true)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-all hover:shadow-lg text-lg"
          >
            <Download className="w-6 h-6" />
            Download Mangaale App
          </button>
        </div>
      </section>

      {/* Installation Popup */}
      <InstallationInstructionsPopup
        isOpen={showInstallPopup}
        onClose={() => setShowInstallPopup(false)}
      />
    </div>
  );
};

export default DownloadPage;
