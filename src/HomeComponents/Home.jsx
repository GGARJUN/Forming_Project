import React from 'react'

import { NavBar } from '../components/NavBar'
import { Banner } from '../components/Banner'
import { About } from '../components/About'
import { Feature } from '../components/Feature'
import { Product } from '../components/Product'
import { Footer } from '../components/Footer'
import { AboutCard } from '../AboutPage/AboutCard'

export const Home = () => {
  return (
    <>
        <NavBar/>
        {/* <AboutCard/> */}
        <Banner/>
        <About/>
        <Feature/>
        <Product/>
        <Footer/>
    </>
  )
}
