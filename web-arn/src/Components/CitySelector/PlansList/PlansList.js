import React from 'react';
import Plan from './Plan/Plan';

import PlansListStyled from './PlansList.styled';

export default function PlansList({
  cities,
  selectedCity,
  selectedModality,
  selectedArea,
}) {
  const city = cities.find((city) => selectedCity === city.normalizedName);
  const plans = selectedArea === 'urban' ? city.plans.urban : city.plans.rural;
  const filteredPlans = plans.filter(
    (plan) => plan.modality === selectedModality
  );

  return (
    <PlansListStyled>
      {filteredPlans.map((plan, index) => (
        <Plan key={index} plan={plan} />
      ))}
    </PlansListStyled>
  );
}
