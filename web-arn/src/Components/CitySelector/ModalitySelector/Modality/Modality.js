import React from 'react';
import ModalityStyled from './Modality.styled';
import AreaNameStyled from './ModalityName/ModalityName.styled';

function getName(normalizedName) {
  if (normalizedName === 'fiber') {
    return 'Fibra ótica';
  }

  return 'Rádio';
}

export default function Modality({
  name,
  selectedModality,
  setSelectedModality,
}) {
  const handleClick = (event) => {
    const { id, parentElement } = event.target;

    setSelectedModality(id || parentElement.id);
  };

  return (
    <ModalityStyled
      selectedModality={selectedModality === name}
      onClick={handleClick}
      id={name}>
      <AreaNameStyled selectedModality={selectedModality === name}>
        {getName(name)}
      </AreaNameStyled>
    </ModalityStyled>
  );
}
