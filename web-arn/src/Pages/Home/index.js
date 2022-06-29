import React from 'react';
import Banner from '../../Components/Banner';
import Bar from '../../Components/Bar';
import CitySelector from '../../Components/CitySelector';
import Footer from '../../Components/Footer';
import HomeHeader from '../../Components/HomeHeader';
import Plans from '../../Components/Plans/Plans';
import './styles.css';

function Home() {
  return (
    <>
      <HomeHeader />
      <Banner />
      <div className="home-publicity" />
      <Bar />
      <Plans />
      <CitySelector />
      <Footer />
    </>
  );
}

export default Home;
