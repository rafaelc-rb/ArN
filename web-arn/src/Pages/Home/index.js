import React from 'react';
import HomeHeader from '../../Components/HomeHeader';
import Banner from '../../Components/Banner';
import Bar from '../../Components/Bar';
import CitySelector from '../../Components/CitySelector';
import Footer from '../../Components/Footer';
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
