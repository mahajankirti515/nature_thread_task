import React from 'react'
import HeroCarousel from '../Components/HeroCarousel/HeroCarousel'
import AmazingApparel from '../Components/AmazingApparel/AmazingApparel'
import FashionShowcase from '../Components/FashionShowcase/FashionShowcase'

const Home = () => {
  return (
    <div>
        <HeroCarousel />
        <AmazingApparel autoplayDelay={4000} />
        <FashionShowcase />
    </div>
  )
}

export default Home