import React from 'react'
import HeroSection from '../components/home/HeroSection'
import ProductCategories from '../components/home/ProductCategories'
import BrandIntroduction from '../components/home/BrandIntroduction'
import OurProducts from '../components/home/OurProducts'
import WhyChooseUs from '../components/home/WhyChooseUs'
import BrandVideo from '../components/home/BrandVideo'
import QualityCommitment from '../components/home/QualityCommitment'
import BulkOrderCTA from '../components/home/BulkOrderCTA'
import OurHeritage from '../components/home/OurHeritage'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <ProductCategories/>
      <BrandIntroduction/>
      <OurProducts/>
      <WhyChooseUs/>
      <BrandVideo/>
      <QualityCommitment/>
      <BulkOrderCTA/>
      <OurHeritage/>
    </div>
  )
}

export default Home
