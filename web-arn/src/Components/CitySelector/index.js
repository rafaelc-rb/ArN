import React, { useState } from 'react';
import AreaSelector from './AreaSelector/AreaSelector';
import Cities from './Cities/Cities';
import ModalitySelector from './ModalitySelector/ModalitySelector';
import './styles.css';

const CITIES = [
  {
    name: 'Anápolis',
    normalizedName: 'anapolis',
    state: 'GO',
    plans: {
      urban: [
        { velocity: 100, price: 50 },
        { velocity: 200, price: 150 },
        { velocity: 300, price: 250 },
      ],
      rural: [
        { velocity: 50, price: 50 },
        { velocity: 100, price: 150 },
        { velocity: 150, price: 250 },
      ],
    },
  },
  {
    name: 'Ouro Verde',
    normalizedName: 'ouro-verde',
    state: 'GO',
    plans: {
      urban: [
        { velocity: 100, price: 50 },
        { velocity: 200, price: 150 },
        { velocity: 300, price: 250 },
      ],
      rural: [
        { velocity: 50, price: 50 },
        { velocity: 100, price: 150 },
        { velocity: 150, price: 250 },
      ],
    },
  },
  {
    name: 'Alexânia',
    normalizedName: 'alexania',
    state: 'GO',
    plans: {
      urban: [
        { velocity: 100, price: 50 },
        { velocity: 200, price: 150 },
        { velocity: 300, price: 250 },
      ],
      rural: [
        { velocity: 50, price: 50 },
        { velocity: 100, price: 150 },
        { velocity: 150, price: 250 },
      ],
    },
  },
  {
    name: 'Abadiânia',
    normalizedName: 'abadiania',
    state: 'GO',
    plans: {
      urban: [
        { velocity: 100, price: 50 },
        { velocity: 200, price: 150 },
        { velocity: 300, price: 250 },
      ],
      rural: [
        { velocity: 50, price: 50 },
        { velocity: 100, price: 150 },
        { velocity: 150, price: 250 },
      ],
    },
  },
];

function CitySelector() {
  const [selectedCity, setSelectedCity] = useState('anapolis');
  const [selectedArea, setSelectedArea] = useState('urban');
  const [selectedModality, setsSelectedModality] = useState('fiber');

  return (
    <div>
      <div id="plans">
        <h1 className="title">Escolha sua cidade</h1>
        <h3 className="text">Veja a disponibilidade de</h3>
        <h3 className="text">planos em sua cidade!</h3>

        <Cities
          cities={CITIES}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />

        <AreaSelector
          selectedArea={selectedArea}
          setSelectedArea={setSelectedArea}
        />

        <ModalitySelector
          selectedModality={selectedModality}
          setSelectedModality={setsSelectedModality}
        />
      </div>
    </div>
  );
}

export default CitySelector;
