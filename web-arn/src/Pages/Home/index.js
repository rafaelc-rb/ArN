import React from 'react'
import Banner from '../../Components/Banner'
import CitySelector from '../../Components/CitySelector'
import Bar from '../../Components/Bar'
import HomeHeader from '../../Components/HomeHeader'

function Home() {
  return (
    <>
      <HomeHeader />
      <Banner />
      <Bar />
      <div id='plans'>
        <h1 className='title'>Escolha sua cidade</h1>
        <h3 className='text'>Veja a disponibilidade de</h3>
        <h3 className='text'>planos em sua cidade!</h3>
      </div>
      <CitySelector />
    </>
  )
}

export default Home