import React from 'react';
import PlanStyled from './Plan.styled';
import PlanButton from './PlanButton/PlanButton';
import PlanDescriptionStyled from './PlanDescription/PlanDescription.styled';
import PlanHeader from './PlanHeader/PlanHeader';
import PlanPriceStyled from './PlanPrice/PlanPrice.styled';

export default function Plan({ plan }) {
  return (
    <PlanStyled>
      <PlanHeader
        optionalWifi={true}
        price={plan.price}
        velocity={plan.velocity}
        modality={plan.modality}
      />

      <PlanDescriptionStyled>
        las djidsjf iajdsf sdaf ophsd fhposudhf poadhsfpu dhsfpu dafpu hpadsu
        hpuh pasudhf pisadhpfuh uh
      </PlanDescriptionStyled>

      <PlanPriceStyled>R$ {plan.price},00/mês</PlanPriceStyled>

      <PlanButton />
    </PlanStyled>
  );
}
