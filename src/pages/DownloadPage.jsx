import React, { useState } from 'react';
import { Download, Apple, CheckCircle2, Shield, Zap, Clock, Star, ArrowDown, Smartphone } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import InstallationInstructionsPopup from '../components/sections/InstallationInstructionsPopup';
import { appInfo, appFeatures } from '../data/appData';

const DownloadPage = () => {
  const [showInstallPopup, setShowInstallPopup] = useState(false);

  usePageMeta(
    'Download Mangaale App - Fast Food Delivery',
    'Download Mangaale app for Android. Order food, scan QR menus, get real-time delivery tracking. Available on Android now, iOS coming soon.'
  );

  return (
<<<<<<< HEAD
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mangaale-primary to-mangaale-secondary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Download Mangaale App
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8 max-w-2xl mx-auto">
=======
    <div className="bg-white">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-mangaale-dark via-gray-900 to-gray-950 text-white pt-32 md:pt-40 pb-20 md:pb-32">
        {/* Decorative glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-mangaale-primary/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-mangaale-secondary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-mangaale-primary/40 bg-mangaale-primary/10 text-mangaale-secondary text-xs font-semibold tracking-widest uppercase mb-8">
              <Smartphone className="w-3.5 h-3.5" />
              Android App
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6">
              Download the{' '}
              <span className="bg-gradient-to-r from-mangaale-primary to-mangaale-secondary bg-clip-text text-transparent">
                Mangaale
              </span>{' '}
              App
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10">
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
              Get your favorite food delivered fast. Order from nearby restaurants, scan QR menus, and track your delivery in real-time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowInstallPopup(true)}
<<<<<<< HEAD
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-mangaale-primary font-bold rounded-xl hover:bg-mangaale-tint transition-all hover:shadow-lg"
=======
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-mangaale-primary to-mangaale-secondary text-white font-bold text-base rounded-xl shadow-[0_8px_30px_-6px_rgba(255,122,0,0.45)] hover:shadow-[0_12px_40px_-6px_rgba(255,122,0,0.55)] hover:-translate-y-0.5 transition-all duration-300"
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download for Android
              </button>
              <button
                disabled
<<<<<<< HEAD
                className="flex items-center justify-center gap-2 px-8 py-4 bg-mangaale-primary text-white font-bold rounded-xl border-2 border-white opacity-60 cursor-not-allowed"
=======
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/8 text-gray-400 font-semibold text-base rounded-xl border border-white/10 cursor-not-allowed"
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
              >
                <Apple className="w-5 h-5" />
                Coming Soon on iOS
              </button>
            </div>

<<<<<<< HEAD
            {/* Version Info */}
            <div className="mt-8 inline-block bg-white bg-opacity-20 rounded-lg px-6 py-3">
              <p className="text-sm text-white/85">
                📱 Version {appInfo.version} • 📦 {appInfo.size} • 🔒 Secure Download
              </p>
=======
            {/* Version Pill */}
            <div className="mt-10 inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
              <span className="text-sm text-gray-400 font-medium">
                v{appInfo.version}
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span className="text-sm text-gray-400 font-medium">
                {appInfo.size}
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span className="text-sm text-gray-400 font-medium flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-green-400" />
                Secure
              </span>
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-5 h-5 text-gray-500" />
        </div>
      </section>

      {/* ── Why Download + Stats ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Features */}
            <div>
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold text-mangaale-text mb-8">
=======
              <span className="section-eyebrow mb-4 inline-flex">Features</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold tracking-tight text-mangaale-text leading-tight mb-4">
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
                Why Download Mangaale?
              </h2>
              <p className="text-mangaale-subtext text-base md:text-lg leading-relaxed mb-10">
                Everything you need for fast and easy food ordering, built right into the app.
              </p>

              <div className="space-y-5">
                {appFeatures.map((feature, index) => (
<<<<<<< HEAD
                  <div key={index} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-mangaale-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-mangaale-text mb-1">{feature.title}</h4>
                      <p className="text-mangaale-subtext">{feature.description}</p>
=======
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-mangaale-primary/8 flex items-center justify-center group-hover:bg-mangaale-primary/15 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-mangaale-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-mangaale-text text-[15px] mb-0.5">{feature.title}</h4>
                      <p className="text-mangaale-subtext text-sm leading-relaxed">{feature.description}</p>
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
                    </div>
                  </div>
                ))}
              </div>
            </div>

<<<<<<< HEAD
            {/* Right Column - Stats */}
            <div className="bg-mangaale-tint rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-mangaale-text mb-8">
                By the Numbers
              </h3>
=======
            {/* Stats Card */}
            <div className="mangaale-card p-8 md:p-10 bg-gradient-to-br from-white to-mangaale-bg-soft">
              <span className="section-eyebrow mb-6 inline-flex">By the numbers</span>
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6

              <div className="grid grid-cols-2 gap-8">
                <div>
<<<<<<< HEAD
                  <p className="text-4xl md:text-5xl font-bold text-mangaale-primary mb-2">
                    {appInfo.rating}⭐
                  </p>
                  <p className="text-mangaale-subtext">Average Rating</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-mangaale-primary mb-2">
                    {appInfo.downloads}
                  </p>
                  <p className="text-mangaale-subtext">Downloads</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-mangaale-primary mb-2">
                    &lt;30 mins
                  </p>
                  <p className="text-mangaale-subtext">Average Delivery Time</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-mangaale-primary mb-2">
                    24/7
                  </p>
                  <p className="text-mangaale-subtext">Customer Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* App Information Detailed */}
          <div className="bg-mangaale-tint rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-mangaale-text mb-8">
              App Information
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-sm text-mangaale-subtext mb-2">VERSION</p>
                <p className="text-2xl font-bold text-mangaale-primary">{appInfo.version}</p>
              </div>
              <div>
                <p className="text-sm text-mangaale-subtext mb-2">SIZE</p>
                <p className="text-2xl font-bold text-mangaale-primary">{appInfo.size}</p>
              </div>
              <div>
                <p className="text-sm text-mangaale-subtext mb-2">PLATFORM</p>
                <p className="text-2xl font-bold text-mangaale-primary">{appInfo.platform}</p>
              </div>
              <div>
                <p className="text-sm text-mangaale-subtext mb-2">MIN ANDROID</p>
                <p className="text-2xl font-bold text-mangaale-primary">{appInfo.minAndroidVersion}+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Steps Section */}
      <section className="bg-mangaale-tint py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-mangaale-text mb-12 text-center">
              How to Install
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {appInfo.minInstallationStepsAndroid.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="bg-gradient-to-br from-mangaale-primary to-mangaale-secondary text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h4 className="font-bold text-mangaale-text mb-2">{step.title}</h4>
                  <p className="text-sm text-mangaale-subtext">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={() => setShowInstallPopup(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-mangaale-primary to-mangaale-secondary text-white font-bold rounded-xl hover:shadow-lg transition-all hover:scale-105"
              >
                <Download className="w-6 h-6" />
                Download Now & Install
              </button>
            </div>
=======
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-display text-4xl md:text-5xl font-extrabold text-mangaale-primary">{appInfo.rating}</span>
                    <Star className="w-5 h-5 text-mangaale-secondary fill-mangaale-secondary" />
                  </div>
                  <p className="text-mangaale-subtext text-sm font-medium">Average Rating</p>
                </div>
                <div>
                  <span className="font-display text-4xl md:text-5xl font-extrabold text-mangaale-primary">{appInfo.downloads}</span>
                  <p className="text-mangaale-subtext text-sm font-medium mt-1">Downloads</p>
                </div>
                <div>
                  <span className="font-display text-4xl md:text-5xl font-extrabold text-mangaale-primary">&lt;30</span>
                  <span className="text-mangaale-primary font-semibold text-lg ml-1">min</span>
                  <p className="text-mangaale-subtext text-sm font-medium mt-1">Avg Delivery</p>
                </div>
                <div>
                  <span className="font-display text-4xl md:text-5xl font-extrabold text-mangaale-primary">24/7</span>
                  <p className="text-mangaale-subtext text-sm font-medium mt-1">Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* App Info Bar */}
          <div className="mt-16 mangaale-card p-6 md:p-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-mangaale-subtext mb-5">App Information</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Version', value: appInfo.version },
                { label: 'Size', value: appInfo.size },
                { label: 'Platform', value: appInfo.platform },
                { label: 'Min Android', value: `${appInfo.minAndroidVersion}+` },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-display text-2xl md:text-3xl font-extrabold text-mangaale-primary">{item.value}</p>
                  <p className="text-mangaale-subtext text-sm font-medium mt-1">{item.label}</p>
                </div>
              ))}
            </div>
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Security & Trust Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-mangaale-text mb-12 text-center">
              Security & Safety
=======
      {/* ── Installation Steps ── */}
      <section className="bg-mangaale-bg-soft py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <span className="section-eyebrow mb-4 inline-flex">Quick Setup</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold tracking-tight text-mangaale-text leading-tight">
              How to Install
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
            </h2>
          </div>

<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border-2 border-mangaale-border hover:border-mangaale-primary/40 transition-colors">
                <Shield className="w-12 h-12 text-mangaale-primary mb-4" />
                <h4 className="font-bold text-mangaale-text mb-3">HTTPS Protected</h4>
                <p className="text-mangaale-subtext text-sm">
                  All downloads are secured with HTTPS encryption for your safety.
                </p>
=======
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-5">
            {appInfo.minInstallationStepsAndroid.map((step) => (
              <div key={step.step} className="text-center group">
                <div className="relative mx-auto mb-5">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-mangaale-primary to-mangaale-secondary text-white flex items-center justify-center font-display font-extrabold text-xl shadow-[0_6px_20px_-4px_rgba(255,122,0,0.35)] group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                </div>
                <h4 className="font-semibold text-mangaale-text text-[15px] mb-1.5">{step.title}</h4>
                <p className="text-mangaale-subtext text-sm leading-relaxed">{step.description}</p>
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
              </div>
            ))}
          </div>

<<<<<<< HEAD
              <div className="bg-white rounded-xl p-8 border-2 border-mangaale-border hover:border-mangaale-primary/40 transition-colors">
                <Zap className="w-12 h-12 text-mangaale-primary mb-4" />
                <h4 className="font-bold text-mangaale-text mb-3">Fast CDN</h4>
                <p className="text-mangaale-subtext text-sm">
                  Download quickly with our optimized content delivery network.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-mangaale-border hover:border-mangaale-primary/40 transition-colors">
                <Clock className="w-12 h-12 text-mangaale-primary mb-4" />
                <h4 className="font-bold text-mangaale-text mb-3">Regular Updates</h4>
                <p className="text-mangaale-subtext text-sm">
                  We release regular updates with security patches and new features.
                </p>
              </div>
            </div>
=======
          <div className="mt-14 text-center">
            <button
              onClick={() => setShowInstallPopup(true)}
              className="mangaale-button-primary text-base px-10 py-4 rounded-xl hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Now &amp; Install
            </button>
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* FAQ Section */}
      <section className="bg-mangaale-tint py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-mangaale-text mb-12 text-center">
=======
      {/* ── Security & Trust ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <span className="section-eyebrow mb-4 inline-flex">Trust & Safety</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold tracking-tight text-mangaale-text leading-tight">
              Security &amp; Safety
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'HTTPS Protected',
                desc: 'All downloads are secured with HTTPS encryption for your safety.',
              },
              {
                icon: Zap,
                title: 'Fast CDN',
                desc: 'Download quickly with our optimized content delivery network.',
              },
              {
                icon: Clock,
                title: 'Regular Updates',
                desc: 'We release regular updates with security patches and new features.',
              },
            ].map((card) => (
              <div key={card.title} className="mangaale-card p-7 md:p-8 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-mangaale-primary/8 flex items-center justify-center mb-5 group-hover:bg-mangaale-primary/15 transition-colors">
                  <card.icon className="w-6 h-6 text-mangaale-primary" />
                </div>
                <h4 className="font-semibold text-mangaale-text text-base mb-2">{card.title}</h4>
                <p className="text-mangaale-subtext text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <span className="section-eyebrow mb-4 inline-flex">FAQ</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold tracking-tight text-mangaale-text leading-tight">
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
              Frequently Asked Questions
            </h2>
          </div>

<<<<<<< HEAD
            <div className="space-y-6">
              <details className="bg-white rounded-lg p-6 border border-mangaale-border group">
                <summary className="font-bold text-mangaale-text cursor-pointer flex items-center justify-between">
                  What is the minimum Android version required?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-mangaale-subtext mt-4">
                  Mangaale requires Android 7.0 or higher. Make sure your device is running Android 7.0 or a newer version.
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 border border-mangaale-border group">
                <summary className="font-bold text-mangaale-text cursor-pointer flex items-center justify-between">
                  How much storage space does the app need?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-mangaale-subtext mt-4">
                  The app is approximately {appInfo.size}, so make sure you have enough free space on your device.
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 border border-mangaale-border group">
                <summary className="font-bold text-mangaale-text cursor-pointer flex items-center justify-between">
                  Is my download data safe?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-mangaale-subtext mt-4">
                  Yes, all downloads are secured with HTTPS encryption and hosted on secure servers. Your data is protected.
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 border border-mangaale-border group">
                <summary className="font-bold text-mangaale-text cursor-pointer flex items-center justify-between">
                  What if I allow "Install Unknown Apps"?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-mangaale-subtext mt-4">
                  This is a normal Android security feature. You're allowing your browser/file manager to install the app. This is safe for our APK from our official server.
                </p>
              </details>
            </div>
=======
          <div className="space-y-4">
            {[
              {
                q: 'What is the minimum Android version required?',
                a: 'Mangaale requires Android 7.0 or higher. Make sure your device is running Android 7.0 or a newer version.',
              },
              {
                q: 'How much storage space does the app need?',
                a: `The app is approximately ${appInfo.size}, so make sure you have enough free space on your device.`,
              },
              {
                q: 'Is my download data safe?',
                a: 'Yes, all downloads are secured with HTTPS encryption and hosted on secure servers. Your data is protected.',
              },
              {
                q: 'What if I allow "Install Unknown Apps"?',
                a: "This is a normal Android security feature. You're allowing your browser/file manager to install the app. This is safe for our APK from our official server.",
              },
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border border-gray-200/80 hover:border-mangaale-primary/30 transition-colors">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer font-semibold text-mangaale-text text-[15px] select-none">
                  {faq.q}
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 group-open:bg-mangaale-primary/10 flex items-center justify-center text-xs text-mangaale-subtext group-open:text-mangaale-primary transition-all group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="px-6 pb-5 text-mangaale-subtext text-sm leading-relaxed -mt-1">
                  {faq.a}
                </p>
              </details>
            ))}
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-mangaale-primary to-mangaale-secondary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Order?
          </h2>
          <p className="text-lg text-white/85 mb-8 max-w-2xl mx-auto">
=======
      {/* ── Bottom CTA ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-mangaale-dark via-gray-900 to-gray-950 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,122,0,0.12),transparent_70%)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-5">
            Ready to Order?
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
            Download Mangaale today and start ordering from your favorite restaurants!
          </p>
          <button
            onClick={() => setShowInstallPopup(true)}
<<<<<<< HEAD
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-mangaale-primary font-bold rounded-xl hover:bg-mangaale-tint transition-all hover:shadow-lg text-lg"
=======
            className="group inline-flex items-center gap-2.5 px-10 py-4 bg-gradient-to-r from-mangaale-primary to-mangaale-secondary text-white font-bold text-lg rounded-xl shadow-[0_8px_30px_-6px_rgba(255,122,0,0.45)] hover:shadow-[0_12px_40px_-6px_rgba(255,122,0,0.55)] hover:-translate-y-0.5 transition-all duration-300"
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
          >
            <Download className="w-6 h-6 group-hover:animate-bounce" />
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
