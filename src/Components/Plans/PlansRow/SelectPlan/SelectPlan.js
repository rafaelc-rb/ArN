import React from 'react';
import SelectPlanStyled from './SelectPlan.styled';

export default function SelectPlan({ addToSelectedPlan }) {
  const handleClick = (value) => {
    return addToSelectedPlan(value);
  };

  return (
    <SelectPlanStyled>
      <button onClick={() => handleClick(-1)}>{'<-'}</button>
      <button onClick={() => handleClick(1)}>{'->'}</button>
    </SelectPlanStyled>
  );
}
