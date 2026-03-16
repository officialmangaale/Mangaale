import usePageMeta from '../hooks/usePageMeta'
import SectionReveal from '../components/shared/SectionReveal'
import { aboutMission, aboutVision, aboutProblem, aboutSolution, aboutValues } from '../data/aboutData'
import * as Icons from 'lucide-react'

const AboutPage = () => {
  usePageMeta('Mangaale | About Us', 'Learn about Mangaale\'s mission to empower restaurants with independent digital ordering and operations platform.')

  return (
    <div className="pt-20 pb-24">
      {/* Hero Section */}
      <SectionReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mangaale-text mb-4">
            About Mangaale
          </h1>
          <p className="text-lg text-mangaale-subtext max-w-2xl mx-auto">
            Empowering restaurants to grow independently and take control of their digital presence
          </p>
        </div>
      </SectionReveal>

      {/* Mission & Vision */}
      <SectionReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-gradient-to-br from-mangaale-primary to-mangaale-secondary rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">{aboutMission.title}</h2>
            <p className="text-lg leading-relaxed">
              {aboutMission.description}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-mangaale-secondary to-orange-400 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">{aboutVision.title}</h2>
            <p className="text-lg leading-relaxed">
              {aboutVision.description}
            </p>
          </div>
        </div>
      </SectionReveal>

      {/* Problem Section */}
      <SectionReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-mangaale-bg-soft rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-mangaale-text mb-4 text-center">
          {aboutProblem.title}
        </h2>
        <p className="text-center text-mangaale-subtext mb-12 max-w-2xl mx-auto">We identified key challenges in the food delivery and restaurant tech space</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {aboutProblem.highlights.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-mangaale-primary/10">
              <h3 className="text-lg font-bold text-mangaale-text mb-2">{item.title}</h3>
              <p className="text-mangaale-subtext">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionReveal>

      {/* Solution Section */}
      <SectionReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-mangaale-primary/10">
          <h2 className="text-3xl md:text-4xl font-bold text-mangaale-text mb-4">
            {aboutSolution.title}
          </h2>
          <p className="text-lg text-mangaale-subtext mb-8 leading-relaxed">
            {aboutSolution.description}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Icons.Check className="w-6 h-6 text-mangaale-primary flex-shrink-0" />
              <span className="text-mangaale-text font-medium">Restaurant independence and control</span>
            </div>
            <div className="flex items-center gap-3">
              <Icons.Check className="w-6 h-6 text-mangaale-primary flex-shrink-0" />
              <span className="text-mangaale-text font-medium">Integrated order and delivery management</span>
            </div>
            <div className="flex items-center gap-3">
              <Icons.Check className="w-6 h-6 text-mangaale-primary flex-shrink-0" />
              <span className="text-mangaale-text font-medium">Customer data and insights</span>
            </div>
            <div className="flex items-center gap-3">
              <Icons.Check className="w-6 h-6 text-mangaale-primary flex-shrink-0" />
              <span className="text-mangaale-text font-medium">Fair rider compensation</span>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Values Section */}
      <SectionReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-mangaale-text mb-12 text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutValues.map((value, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-mangaale-primary/10 hover:border-mangaale-primary/30 transition-all">
              <div className="w-10 h-10 bg-gradient-to-br from-mangaale-primary to-mangaale-secondary rounded-lg flex items-center justify-center text-white mb-4">
                <Icons.Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-mangaale-text mb-2">{value.title}</h3>
              <p className="text-mangaale-subtext text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </SectionReveal>

      {/* CTA Section */}
      <SectionReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="bg-gradient-to-r from-mangaale-primary to-mangaale-secondary rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Mangaale Movement</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Be part of a platform that believes in restaurant independence and empowerment</p>
          <button className="px-8 py-3 bg-white text-mangaale-primary rounded-lg font-semibold hover:shadow-lg transition-all">
            Start Your Journey
          </button>
        </div>
      </SectionReveal>
    </div>
  )
}

export default AboutPage
