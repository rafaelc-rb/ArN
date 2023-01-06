import React from 'react';
import Tech from './Tech/Tech';
import TechSelectorStyled from './TechSelector.styled';

export default function TechSelector({
  selectedTech,
  setSelectedTech,
}) {
  return (
    <TechSelectorStyled>
      <Tech
        name={'fiber'}
        selectedTech={selectedTech}
        setSelectedTech={setSelectedTech}
      />

      <Tech
        name={'radio'}
        selectedTech={selectedTech}
        setSelectedTech={setSelectedTech}
      />
    </TechSelectorStyled>
  );
}
