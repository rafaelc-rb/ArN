import React from 'react';
import CityStyled from './City.styled';
import CityNameStyled from './CityName/CityName.styled';
import CityRadioButtonStyled from './CityRadioButton/CityRadioButton.styled';

export default function City({ city, selectedCity, setSelectedCity }) {

  const handleClick = (event) => {
    const { parentElement } = event.target;
    var id = parentElement.id
    setSelectedCity(Number(id));
  };

  return (
    <CityStyled id={city.id} onClick={handleClick}>
      <CityNameStyled selectedCity={selectedCity === city.id}>
        {city.name} - GO
      </CityNameStyled>

      <CityRadioButtonStyled
        selectedCity={selectedCity === city.id}
      />
    </CityStyled>
  );
}
