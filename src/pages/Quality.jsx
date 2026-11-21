import React from 'react'
import QualityHero from '../components/quality/QualityHero'
import OurIngredients from '../components/quality/OurIngredients'
import PreparationProcess from '../components/quality/PreparationProcess'
import PackagingCare from '../components/quality/PackagingCare'
import ComplianceInformation from '../components/quality/ComplianceInformation'

const Quality = () => {
  return (
    <div>
      <QualityHero/>
      <OurIngredients/>
      <PreparationProcess/>
      <PackagingCare/>
      <ComplianceInformation/>
    </div>
  )
}

export default Quality
