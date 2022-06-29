import React from 'react';
import './styles.css';
import CitySelection from '../CitySelection';

function CitySelector() {
  return (
    <div>
      <div id="plans">
        <h1 className="title">Escolha sua cidade</h1>
        <h3 className="text">Veja a disponibilidade de</h3>
        <h3 className="text">planos em sua cidade!</h3>
        <CitySelection />
      </div>
    </div>
  );
}

export default CitySelector;
