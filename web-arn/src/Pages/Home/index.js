import React from 'react'
import './styles.css'
import Banner from '../../Components/Banner'
import CitySelector from '../../Components/CitySelector'
import Bar from '../../Components/Bar'
import HomeHeader from '../../Components/HomeHeader'
import Footer from '../../Components/Footer'

function Home() {
  return (
    <>
      <HomeHeader />
      <Banner />
      <div className='home-publicity' />
      <Bar />
      <CitySelector />
      <Footer />
    </>
  )
}

export default Home