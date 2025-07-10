import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import SkillsSlider from './Components/sliderImages/SkillsSlider'
import Curosole from './Components/sliderImages/Curosole'

const Layout = () => {
  return (
    <div>

        <Header/>
        <SkillsSlider/>
        
        <Outlet/>
          <Curosole/> 
        <Footer/>
    </div>
  )
}

export default Layout