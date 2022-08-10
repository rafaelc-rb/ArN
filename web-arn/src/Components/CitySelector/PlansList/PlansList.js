import React from 'react';
import Plan from './Plan/Plan';

import PlansListStyled from './PlansList.styled';

export default function PlansList({
  data,
  selectedCity,
  selectedTech,
  selectedArea,
}) {

  const zoneHandled = selectedArea === 'urban' ? 'Urbana' : 'Rural';
  const techHandled = selectedTech === 'fiber' ? 'Fibra' : 'Rádio';

  const filteredPlans = data.filter((plans) => plans.city.id === Number(selectedCity) && plans.zone.name === zoneHandled && plans.technology.name === techHandled);

  return (
    <PlansListStyled>
      {filteredPlans.map((plan) => (
        <Plan key={plan.id} plan={plan} />
      ))}
    </PlansListStyled>
  );
}
