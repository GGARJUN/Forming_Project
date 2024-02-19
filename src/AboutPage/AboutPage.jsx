import React from 'react'
import { NavBar } from '../components/NavBar'
import { About } from '../components/About'
import { ScrollToTop } from '../components/ScrollToTop'


export const AboutPage = () => {
  return (

    <div>
        <NavBar/>

        <About/>
        <ScrollToTop/>
    </div>
  )
}
