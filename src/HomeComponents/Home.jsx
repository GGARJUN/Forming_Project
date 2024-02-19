import React from 'react'

import { NavBar } from '../components/NavBar'
import { Banner } from '../components/Banner'
import { About } from '../components/About'
import { Feature } from '../components/Feature'
import { Product } from '../components/Product'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <>
        <NavBar/>
        <Banner/>
        <About/>
        <Feature/>
        <Product/>
        <Footer/>
    </>
  )
}
