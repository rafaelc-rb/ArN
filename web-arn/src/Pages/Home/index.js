import React from 'react';
import HomeHeader from '../../Components/HomeHeader';
import Banner from '../../Components/Banner';
import Bar from '../../Components/Bar';
import CitySelector from '../../Components/CitySelector';
import Footer from '../../Components/Footer';
import Publicity from '../../Components/Publicity';

function Home() {
  return (
    <>
      <HomeHeader />
      <Banner />
      <Publicity />
      <Bar />
      <CitySelector />
      <Footer />
    </>
  );
}

export default Home;
