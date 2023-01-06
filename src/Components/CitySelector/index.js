import React, { useEffect, useState } from "react";
import AreaSelector from "./AreaSelector/AreaSelector";
import Cities from "./Cities/Cities";
import TechSelector from "./TechSelector/TechSelector";
import PlansList from "./PlansList/PlansList";
import citiesJson from "../../Service/json/citites.json";
import plansJson from "../../Service/json/plans.json";

function CitySelector() {
  const [citiesData, setCitiesData] = useState([]);
  useEffect(() => {
    setCitiesData(citiesJson);
  }, []);

  const [plansData, setPlansData] = useState([]);
  useEffect(() => {
    setPlansData(plansJson);
  }, []);

  const [selectedCity, setSelectedCity] = useState(1);
  const [selectedArea, setSelectedArea] = useState("urban");
  const [selectedTech, setSelectedTech] = useState("radio");

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
