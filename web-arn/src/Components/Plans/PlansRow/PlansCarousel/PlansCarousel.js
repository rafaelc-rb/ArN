import React from 'react';
import Plan from './Plan/Plan';
import PlansCarouselStyled from './PlansCarousel.styled';

export default function PlansCarousel({ plans, selectedPlanIndex }) {
  return (
    <PlansCarouselStyled>
      {plans.map((plan, index) => (
        <Plan
          plan={plan}
          key={index}
          selectedPlan={selectedPlanIndex === index}
        />
      ))}
    </PlansCarouselStyled>
  );
}
