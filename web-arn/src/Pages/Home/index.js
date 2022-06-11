import React from 'react'
import NavBar from '../../Components/NavBar'
import Banner from '../../Components/Banner'
import CitySelection from '../../Components/CitySelection'
import './styles.css'

function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <div>
        <h1 className='title'>Escolha sua cidade</h1>
        <h5 className='text'>Veja a disponibilidade de</h5>
        <h5 className='text'>planos em sua cidade!</h5>
      </div>
      <CitySelection />
    </>
  )
}

export default Home