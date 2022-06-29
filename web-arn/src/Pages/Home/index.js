import React from 'react';
import Banner from '../../Components/Banner';
import Bar from '../../Components/Bar';
import CitySelector from '../../Components/CitySelector';
import Footer from '../../Components/Footer';
import HomeHeader from '../../Components/HomeHeader';
import './styles.css';

function Home() {
  return (
    <>
      <HomeHeader />
      <Banner />
      <div className="home-publicity" />
      <Bar />
      <CitySelector />
      <Footer />
    </>
  );
}

export default Home;
