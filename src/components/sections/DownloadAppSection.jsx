import React, { useState, useEffect } from 'react';
import { Download, Smartphone, Apple, CheckCircle2, Zap, Clock, Headphones } from 'lucide-react';
import InstallationInstructionsPopup from './InstallationInstructionsPopup';
import { appInfo, downloadLinks, appFeatures } from '../../data/appData';

const DownloadAppSection = () => {
  const [showInstallPopup, setShowInstallPopup] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section id="download-app-section" className="py-12 md:py-20 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full opacity-30 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-50 rounded-full opacity-40 -ml-48 -mb-48"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Content */}
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Download the Mangaale App
                </h2>
                <p className="text-base md:text-lg text-gray-600 mb-6">
                  Order from nearby restaurants, scan QR menus, and get fast delivery directly from the Mangaale app.
                </p>
              </div>

              {/* App Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">30-Min Delivery</h4>
                    <p className="text-sm text-gray-600">Get your food fast</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">QR Menu Scan</h4>
                    <p className="text-sm text-gray-600">Instant menu access</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Real-time Tracking</h4>
                    <p className="text-sm text-gray-600">Know your delivery status</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Headphones className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">24/7 Support</h4>
                    <p className="text-sm text-gray-600">Always here to help</p>
                  </div>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button
                  onClick={() => setShowInstallPopup(true)}
                  className="flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all"
                  title="Download APK for Android"
                >
                  <Download className="w-5 h-5" />
                  Download for Android
                </button>
                <button
                  disabled
                  className="flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gray-200 text-gray-500 font-bold rounded-xl cursor-not-allowed"
                  title="iOS coming soon"
                >
                  <Apple className="w-5 h-5" />
                  Coming Soon on iOS
                </button>
              </div>

              {/* App Info */}
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-md border border-gray-100">
                <p className="text-xs md:text-sm text-gray-500 mb-4">App Information</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-orange-600 font-bold text-lg">{appInfo.version}</p>
                    <p className="text-xs text-gray-600">App Version</p>
                  </div>
                  <div>
                    <p className="text-orange-600 font-bold text-lg">{appInfo.size}</p>
                    <p className="text-xs text-gray-600">Size</p>
                  </div>
                  <div>
                    <p className="text-orange-600 font-bold text-lg">{appInfo.platform}</p>
                    <p className="text-xs text-gray-600">Platform</p>
                  </div>
                  <div>
                    <p className="text-orange-600 font-bold text-lg">{appInfo.downloads}</p>
                    <p className="text-xs text-gray-600">Downloads</p>
                  </div>
                </div>
              </div>

              {/* Security Badge */}
              <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Secure & Safe Download - HTTPS Protected</span>
              </div>
            </div>

            {/* Right Side - Phone Mockup */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-xs">
                {/* Phone Frame */}
                <div className="bg-black rounded-3xl shadow-2xl p-3 aspect-video md:aspect-auto md:h-96">
                  <div className="bg-gradient-to-b from-orange-600 to-orange-500 rounded-2xl h-full flex flex-col items-center justify-center p-6 text-white overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-2xl z-20"></div>

                    {/* Phone Content */}
                    <div className="text-center space-y-6 mt-4">
                      <Smartphone className="w-16 h-16 mx-auto" />
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold">Mangaale</h3>
                        <p className="text-orange-100 text-sm">Order. Scan. Deliver.</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle2 className="w-5 h-5" />
                          <span className="text-sm">Fast Delivery</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle2 className="w-5 h-5" />
                          <span className="text-sm">Easy Ordering</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle2 className="w-5 h-5" />
                          <span className="text-sm">Real-time Tracking</span>
                        </div>
                      </div>
                    </div>

                    {/* Status Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-6 bg-black rounded-b-2xl z-10"></div>
                  </div>
                </div>

                {/* Download Badge */}
                <div className="absolute -bottom-4 -right-4 bg-orange-600 text-white px-4 py-2 rounded-full font-bold shadow-lg text-sm">
                  Available Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Why Download Our App?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get exclusive features and benefits available only on the Mangaale mobile app
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appFeatures.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 hover:shadow-lg transition-all border border-orange-100 group-hover:border-orange-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Popup */}
      <InstallationInstructionsPopup
        isOpen={showInstallPopup}
        onClose={() => setShowInstallPopup(false)}
      />
    </>
  );
};

export default DownloadAppSection;
