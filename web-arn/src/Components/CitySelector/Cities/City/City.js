import React from 'react';
import CityStyled from './City.styled';
import CityNameStyled from './CityName/CityName.styled';
import CityRadioButtonStyled from './CityRadioButton/CityRadioButton.styled';

export default function City({ city, state, selectedCity, setSelectedCity }) {
  const handleClick = (event) => {
    const { id, parentElement } = event.target;

    setSelectedCity(id || parentElement.id);
  };

  return (
    <CityStyled id={city.normalizedName} onClick={handleClick}>
      <CityNameStyled selectedCity={selectedCity === city.normalizedName}>
        {city.name} - {city.state}
      </CityNameStyled>

      <CityRadioButtonStyled
        selectedCity={selectedCity === city.normalizedName}
      />
    </CityStyled>
  );
}
