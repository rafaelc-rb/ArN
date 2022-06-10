import React from 'react'
import NavBar from '../../Components/NavBar'
import Banners from '../../Components/Banners'
import CitySelection from '../../Components/CitySelection'


function Home() {
  return (
    <>
        <NavBar/>
        <div style={{textAlign:'center'}}>Here Goes the Carousel</div>
        {/* <Banners/> */}
        <CitySelection/>
    </>
  )
}

export default Home