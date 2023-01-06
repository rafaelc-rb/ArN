import React from 'react';
import CitiesStyled from './Cities.styled';
import City from './City/City';

export default function Cities({ cities, selectedCity, setSelectedCity }) {
  return (
    <CitiesStyled>
      {cities.map((city) => (
        <City
          key={city.id}
          city={city}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />
      ))}
    </CitiesStyled>
  );
}
