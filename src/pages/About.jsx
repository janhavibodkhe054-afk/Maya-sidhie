import React from 'react'
import AboutHero from '../components/about/AboutHero'
import WhoWeAre from '../components/about/WhoWeAre'
import OurJourney from '../components/about/OurJourney'
import VisionMission from '../components/about/VisionMission'
import Founder from '../components/about/Founder'
import { Certificate } from 'lucide-react'
import Certifications from '../components/about/Certifications'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <WhoWeAre/>
      <OurJourney/>
      <VisionMission/>
      <Founder/>
      <Certifications/>
    </div>
  )
}

export default About
