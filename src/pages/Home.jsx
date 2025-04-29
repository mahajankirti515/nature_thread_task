import React from 'react'
import HeroCarousel from '../Components/HeroCarousel/HeroCarousel'
import AmazingApparel from '../Components/AmazingApparel/AmazingApparel'
import FashionShowcase from '../Components/FashionShowcase/FashionShowcase'
import BottomWearBanner from '../Components/BottomWearBanner/BottomWearBanner'
import PersonalCare from '../Components/PersonalCare/PersonalCare'
import GentlemenSlides from '../Components/gentlemenSlides/GentlemenSlides'
import WithInNatureBanner from '../Components/BottomWearBanner/WithInNatureBanner'

const Home = () => {
  return (
    <div>
        <HeroCarousel />
        <AmazingApparel autoplayDelay={2000} />
        <FashionShowcase />
        <GentlemenSlides autoplayDelay={2000} />
        <BottomWearBanner />
        <PersonalCare />
        <WithInNatureBanner />
    </div>
  )
}

export default Home