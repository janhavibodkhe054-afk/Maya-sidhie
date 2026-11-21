import React from 'react'
import ProductHero from '../components/product/ProductHero'
import ProductCollection from '../components/product/ProductCollection'
import ProductInformation from '../components/product/ProductInformation'
import StorageInstructions from '../components/product/StorageInstructions'

const Product = () => {
  return (
    <div>
      <ProductHero/>
      <ProductCollection/>
      <ProductInformation/>
      <StorageInstructions/>
    </div>
  )
}

export default Product
