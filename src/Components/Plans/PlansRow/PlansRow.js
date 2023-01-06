import React from 'react';
import PlansCarousel from './PlansCarousel/PlansCarousel';
import PlansRowStyled from './PlansRow.styled';
import SelectPlan from './SelectPlan/SelectPlan';

export default function PlansRow({
  addToSelectedPlan,
  plans,
  selectedPlanIndex,
}) {
  return (
    <PlansRowStyled>
      <SelectPlan addToSelectedPlan={addToSelectedPlan} />
      <PlansCarousel plans={plans} selectedPlanIndex={selectedPlanIndex} />
    </PlansRowStyled>
  );
}
