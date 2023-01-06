import React from 'react';
import AreaStyled from './Area.styled';
import AreaNameStyled from './AreaName/AreaName.styled';
import SelectedIndicatorStyled from './SelectedIndicator/SelectedIndicator.styled';

function getName(normalizedName) {
  if (normalizedName === 'urban') {
    return 'Estou na área urbana';
  }

  return 'Estou na área rural';
}

export default function Area({ name, selectedArea, setSelectedArea }) {
  const handleClick = (event) => {
    const { id, parentElement } = event.target;

    setSelectedArea(id || parentElement.id);
  };

  return (
    <AreaStyled
      selectedArea={selectedArea === name}
      onClick={handleClick}
      id={name}>
      <SelectedIndicatorStyled selectedArea={selectedArea === name} />

      <AreaNameStyled selectedArea={selectedArea === name}>
        {getName(name)}
      </AreaNameStyled>
    </AreaStyled>
  );
}
