import React, { useEffect, useState } from 'react';
import AreaSelector from './AreaSelector/AreaSelector';
import Cities from './Cities/Cities';
import TechSelector from './TechSelector/TechSelector';
import PlansList from './PlansList/PlansList';

import { api } from '../../Service/Api'

function CitySelector() {
  
  const [citiesData, setCitiesData] = useState([]);
  useEffect(() => {
    api.get('cities').then(function (response) {
      setCitiesData(response.data)
    })
  }, [])

  const [plansData, setPlansData] = useState([]);
  useEffect(() => {
    api.get('plans').then(function (response) {
      setPlansData(response.data)
    })
  }, [])

  const [selectedCity, setSelectedCity] = useState(1);
  const [selectedArea, setSelectedArea] = useState('urban');
  const [selectedTech, setSelectedTech] = useState('radio');


  return (
    <div>
      <div id="plans">
        <h1 className="title">Escolha sua cidade</h1>
        <h3 className="text">Veja a disponibilidade de</h3>
        <h3 className="text">planos em sua cidade!</h3>
        
        <Cities
          cities={citiesData}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />

        <AreaSelector
          selectedArea={selectedArea}
          setSelectedArea={setSelectedArea}
        />

        <TechSelector
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
        />

        <PlansList
          data={plansData}
          selectedArea={selectedArea}
          selectedCity={selectedCity}
          selectedTech={selectedTech}
        />
      </div>
    </div>
  );
}

export default CitySelector;
