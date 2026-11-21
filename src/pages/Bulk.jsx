import React from 'react'
import BulkHero from '../components/bulk/BulkHero'
import WhoCanEnquire from '../components/bulk/WhoCanEnquire'
import WhyConnectWithUs from '../components/bulk/WhyConnectWithUs'
import BulkEnquiryForm from '../components/bulk/BulkEnquiryForm'

const Bulk = () => {
  return (
    <div>
      <BulkHero/>
      <WhoCanEnquire/>
      <WhyConnectWithUs/>
      <BulkEnquiryForm/>
    </div>
  )
}

export default Bulk
