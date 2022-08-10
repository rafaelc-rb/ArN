import React from 'react';
import Plan from './Plan/Plan';

import PlansListStyled from './PlansList.styled';

export default function PlansList({
  data,
  selectedCity,
  selectedTech,
  selectedArea,
}) {

  const filteredPlans = data.find((e) => (selectedCity === e.city.name && selectedArea === e.zone.name && selectedTech === e.technology.name))
  // 

  // const city = data.find(( city) => (selectedCity === city.id));

  // const plans = selectedArea === 'urban' ? city.plans.urban : city.plans.rural;
  // const filteredPlans = plans.filter(
  //   (plan) => plan.tech === selectedTech
  // );

  return (
    <PlansListStyled>
      {filteredPlans.map((plan) => (
        <Plan key={plan.id} plan={plan} />
      ))}
    </PlansListStyled>
  );
}
