import React from 'react';
import TechStyled from './Tech.styled';
import AreaNameStyled from './TechName/TechName.styled';

function getName(normalizedName) {
  if (normalizedName === 'fiber') {
    return 'Fibra óptica';
  }

  return 'Rádio';
}

export default function Tech({
  name,
  selectedTech,
  setSelectedTech,
}) {
  const handleClick = (event) => {
    const { id, parentElement } = event.target;

    setSelectedTech(id || parentElement.id);
  };

  return (
    <TechStyled
      selectedTech={selectedTech === name}
      onClick={handleClick}
      id={name}>
      <AreaNameStyled selectedTech={selectedTech === name}>
        {getName(name)}
      </AreaNameStyled>
    </TechStyled>
  );
}
