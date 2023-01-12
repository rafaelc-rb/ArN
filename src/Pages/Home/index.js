import React from 'react';
import Header from '../../Components/Header';
// import Banner from '../../Components/Banner';
import Bar from '../../Components/Bar';
import CitySelector from '../../Components/CitySelector';
import Footer from '../../Components/Footer';
import Publicity from '../../Components/Publicity';
// import Plans from '../../Components/Plans/Plans';
import './styles.css';

function Home() {
  return (
    <>
      <Header type='home-header' />
      {/* <Banner /> */}
      <Publicity />
      <Bar />
      {/* <Plans /> */}
      <CitySelector />
      <Footer />
    </>
  );
}

export default Home;
