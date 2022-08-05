import React, { useState } from 'react';
import AreaSelector from './AreaSelector/AreaSelector';
import Cities from './Cities/Cities';
import ModalitySelector from './ModalitySelector/ModalitySelector';
import PlansList from './PlansList/PlansList';
import './styles.css';

const CITIES = [
  {
    name: 'Anápolis',
    normalizedName: 'anapolis',
    state: 'GO',
    plans: {
      urban: [
        { velocity: 100, price: 50, modality: 'radio' },
        { velocity: 200, price: 150, modality: 'fiber' },
        { velocity: 300, price: 250, modality: 'fiber' },
      ],
      rural: [
        { velocity: 50, price: 50, modality: 'radio' },
        { velocity: 100, price: 150, modality: 'radio' },
        { velocity: 150, price: 250, modality: 'fiber' },
      ],
    },
  },
  {
    name: 'Ouro Verde',
    normalizedName: 'ouro-verde',
    state: 'GO',
    plans: {
      urban: [
        { velocity: 100, price: 50, modality: 'radio' },
        { velocity: 200, price: 150, modality: 'fiber' },
        { velocity: 300, price: 250, modality: 'fiber' },
      ],
      rural: [
        { velocity: 50, price: 50, modality: 'radio' },
        { velocity: 100, price: 150, modality: 'radio' },
        { velocity: 150, price: 250, modality: 'fiber' },
      ],
    },
  },
  {
    name: 'Alexânia',
    normalizedName: 'alexania',
    state: 'GO',
    plans: {
      urban: [
        { velocity: 100, price: 50, modality: 'radio' },
        { velocity: 200, price: 150, modality: 'fiber' },
        { velocity: 300, price: 250, modality: 'fiber' },
      ],
      rural: [
        { velocity: 50, price: 50, modality: 'radio' },
        { velocity: 100, price: 150, modality: 'radio' },
        { velocity: 150, price: 250, modality: 'fiber' },
      ],
    },
  },
  {
    name: 'Abadiânia',
    normalizedName: 'abadiania',
    state: 'GO',
    plans: {
      urban: [
        { velocity: 100, price: 50, modality: 'radio' },
        { velocity: 200, price: 150, modality: 'fiber' },
        { velocity: 300, price: 250, modality: 'fiber' },
      ],
      rural: [
        { velocity: 50, price: 50, modality: 'radio' },
        { velocity: 100, price: 150, modality: 'radio' },
        { velocity: 150, price: 250, modality: 'fiber' },
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

        <PlansList
          cities={CITIES}
          selectedArea={selectedArea}
          selectedCity={selectedCity}
          selectedModality={selectedModality}
        />
      </div>
    </div>
  );
}

export default CitySelector;
