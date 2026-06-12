import React from 'react'
import LandingPage from '../components/LandingPage'
import WhyChooseUs from '../components/WhyChooseUs'
import OurWork from '../components/OurWork'
import Services from '../components/Services'
import Packages from '../components/Packages'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTASection'

const page = () => {
  return (
    <>
    <LandingPage/>
    <WhyChooseUs/>
    <OurWork/>
    <Services/>
    <Packages/>
    <Testimonials/>
    <CTASection/>
    </>
  )
}

export default page