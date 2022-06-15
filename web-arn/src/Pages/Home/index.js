import React from 'react'
import NavBar from '../../Components/NavBar'
import Banner from '../../Components/Banner'
import CitySelector from '../../Components/CitySelector'
import './styles.css'
import Bar from '../../Components/Bar'

function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <Bar />
      <div>
        <h1 className='title'>Escolha sua cidade</h1>
        <h3 className='text'>Veja a disponibilidade de</h3>
        <h3 className='text'>planos em sua cidade!</h3>
      </div>
      <CitySelector />
    </>
  )
}

export default Home