import usePageMeta from '../hooks/usePageMeta'
import SectionReveal from '../components/shared/SectionReveal'
import { aboutMission, aboutVision, aboutProblem, aboutSolution, aboutValues } from '../data/aboutData'
import * as Icons from 'lucide-react'

const AboutPage = () => {
  usePageMeta('Mangaale | About Us', 'Learn about Mangaale\'s mission to empower restaurants with independent digital ordering and operations platform.')

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <SectionReveal className="mangaale-container mangaale-section text-center">
        <span className="section-eyebrow mb-5 inline-flex">Our Story</span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-5">About Mangaale</h1>
        <p className="section-subtitle">
          Empowering restaurants to grow independently and take control of their digital presence
        </p>
      </SectionReveal>

      {/* Mission & Vision */}
      <SectionReveal className="mangaale-container mangaale-section">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="mangaale-cta-banner text-left !rounded-2xl !p-8">
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{aboutMission.title}</h2>
              <p className="text-white/85 text-[15px] leading-relaxed">{aboutMission.description}</p>
            </div>
          </div>
          <div className="relative overflow-hidden bg-gradient-to-br from-mangaale-secondary to-orange-400 rounded-2xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{aboutVision.title}</h2>
            <p className="text-white/85 text-[15px] leading-relaxed">{aboutVision.description}</p>
          </div>
        </div>
      </SectionReveal>

      {/* Problem */}
      <div className="bg-mangaale-bg-soft">
        <SectionReveal className="mangaale-container mangaale-section">
          <div className="text-center mb-12">
            <span className="section-eyebrow mb-4 inline-flex">Challenge</span>
            <h2 className="section-title mb-4">{aboutProblem.title}</h2>
            <p className="section-subtitle">We identified key challenges in the food delivery and restaurant tech space</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {aboutProblem.highlights.map((item, index) => (
              <div key={index} className="mangaale-card-hover p-6">
                <h3 className="text-lg font-bold text-mangaale-text mb-2">{item.title}</h3>
                <p className="text-mangaale-subtext text-[15px] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>

      {/* Solution */}
      <SectionReveal className="mangaale-container mangaale-section">
        <div className="mangaale-card p-7 md:p-10">
          <span className="section-eyebrow mb-5 inline-flex">Solution</span>
          <h2 className="section-title mb-4">{aboutSolution.title}</h2>
          <p className="text-mangaale-subtext text-base md:text-lg leading-relaxed mb-8">{aboutSolution.description}</p>
          <div className="grid md:grid-cols-2 gap-3.5">
            {[
              'Restaurant independence and control',
              'Integrated order and delivery management',
              'Customer data and insights',
              'Fair rider compensation',
            ].map((item) => (
              <div key={item} className="mangaale-check-item">
                <Icons.Check className="w-5 h-5 text-mangaale-primary flex-shrink-0 mt-0.5" />
                <span className="text-mangaale-text text-[15px] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* Values */}
      <div className="bg-mangaale-bg-soft">
        <SectionReveal className="mangaale-container mangaale-section">
          <div className="text-center mb-12">
            <span className="section-eyebrow mb-4 inline-flex">Values</span>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {aboutValues.map((value, index) => (
              <div key={index} className="mangaale-card-hover p-6">
                <div className="mangaale-icon-box w-10 h-10 rounded-lg mb-4">
                  <Icons.Heart className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-mangaale-text mb-2">{value.title}</h3>
                <p className="text-mangaale-subtext text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>

      {/* CTA */}
      <SectionReveal className="mangaale-container mangaale-section">
        <div className="mangaale-cta-banner">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Mangaale Movement</h2>
            <p className="text-white/85 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Be part of a platform that believes in restaurant independence and empowerment
            </p>
            <button className="mangaale-button-white px-8 py-3.5">Start Your Journey</button>
          </div>
        </div>
      </SectionReveal>
    </div>
  )
}

export default AboutPage
