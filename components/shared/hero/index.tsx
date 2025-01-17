import React from 'react'
import HeroOne from './heroOne'
import FeatureHomeVideo from './featuredHomeVideo'
import FeaturedFlipCard from './featuredFlipCard'

const HeroPage = () => {
  return (
    <div className='mx-10 lg:mx-40'>
      <HeroOne />
      <FeatureHomeVideo />

      <FeaturedFlipCard />
    </div>
  )
}

export default HeroPage
