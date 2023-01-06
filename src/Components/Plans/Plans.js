import React, { useState } from 'react';
import PlansStyled from './Plans.styled';
import PlansRow from './PlansRow/PlansRow';
import PlansTitleStyled from './PlansTitle/PlansTitle.styled';

const PLANS = [
  {
    name: 'Planos residenciais',
    description:
      'Plano perfeito para residencias, oferecendo alta velocidade para streaming de música e vídeos, bem como jogos online',
  },
  {
    name: 'Planos empresariais',
    description:
      'Com uma largura de banda ampla, possui capacidade para várias conexões simultâneas, ideal para empresas de qualquer tamanho',
  },
  {
    name: 'Planos corporativos',
    description:
      'Maxima disponibilidade para empresas que recebem vários acessos simultâneos em qualquer hora do dia',
  },
];

export default function Plans() {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);

  const addToSelectedPlan = (amount) => {
    if (
      (amount === 1 && selectedPlanIndex === PLANS.length - 1) ||
      (amount === -1 && selectedPlanIndex === 0)
    ) {
      return;
    }

    setSelectedPlanIndex(selectedPlanIndex + amount);
  };

  return (
    <PlansStyled>
      <PlansTitleStyled>Conheça nossos planos</PlansTitleStyled>

      <PlansRow
        addToSelectedPlan={addToSelectedPlan}
        selectedPlanIndex={selectedPlanIndex}
        plans={PLANS}
      />
    </PlansStyled>
  );
}
