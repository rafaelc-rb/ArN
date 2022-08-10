import React from 'react';
import HeaderTextStyled from './HeaderText/HeaderText.styled';
import PlanHeaderStyled from './PlanHeader.styled';

export default function PlanHeader({
  optionalWifi,
  velocity,
  price,
  tech,
}) {
  return (
    <PlanHeaderStyled>
      <HeaderTextStyled>
        {optionalWifi ? 'Wifi opicional' : 'Wifi não incluso'}
      </HeaderTextStyled>
      <HeaderTextStyled size="big">{velocity} Mega</HeaderTextStyled>
      <HeaderTextStyled>
        {tech === 'fiber' ? 'Fibra ótica' : 'Rádio'}
      </HeaderTextStyled>
    </PlanHeaderStyled>
  );
}
