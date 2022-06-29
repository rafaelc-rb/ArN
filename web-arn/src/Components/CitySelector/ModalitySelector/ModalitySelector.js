import React from 'react';
import Modality from './Modality/Modality';
import ModalitySelectorStyled from './ModalitySelector.styled';

export default function ModalitySelector({
  selectedModality,
  setSelectedModality,
}) {
  return (
    <ModalitySelectorStyled>
      <Modality
        name={'fiber'}
        selectedModality={selectedModality}
        setSelectedModality={setSelectedModality}
      />

      <Modality
        name={'radio'}
        selectedModality={selectedModality}
        setSelectedModality={setSelectedModality}
      />
    </ModalitySelectorStyled>
  );
}
