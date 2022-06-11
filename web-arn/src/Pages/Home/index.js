import React from 'react'
import NavBar from '../../Components/NavBar'
import Banner from '../../Components/Banner'
import CitySelection from '../../Components/CitySelection'
import './styles.css'
import Bar from '../../Components/Bar'

function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <Bar />
      <div>
        <h1>Escolha sua cidade</h1>
        <h3>Veja a disponibilidade de</h3>
        <h3>planos em sua cidade!</h3>
      </div>
      <CitySelection />
    </>
  )
}

export default Home