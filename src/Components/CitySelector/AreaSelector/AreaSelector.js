import React from 'react';
import Area from './Area/Area';
import AreaSelectorStyled from './AreaSelector.styled';

export default function AreaSelector({ selectedArea, setSelectedArea }) {
  return (
    <AreaSelectorStyled>
      <Area
        name={'urban'}
        selectedArea={selectedArea}
        setSelectedArea={setSelectedArea}
      />

      <Area
        name={'rural'}
        selectedArea={selectedArea}
        setSelectedArea={setSelectedArea}
      />
    </AreaSelectorStyled>
  );
}
