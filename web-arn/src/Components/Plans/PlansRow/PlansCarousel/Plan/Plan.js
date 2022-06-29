import planosEmpresariaisImg from '../../../../../Assets/Img/plan-enterprises.jpg';
import planosResidenciaisImg from '../../../../../Assets/Img/plan-residences.jpg';
import planosCorporativos from '../../../../../Assets/Img/plan-servers.jpg';
import PlanStyled from './Plan.styled';
import PlanDescriptionStyled from './PlanDescription/PlanDescription.styled';
import PlanImageStyled from './PlanImage/PlanImage.styled';
import PlanNameStyled from './PlanName/PlanName.styled';

function getImage(planName) {
  if (planName === 'Planos residenciais') {
    return planosResidenciaisImg;
  }

  if (planName === 'Planos empresariais') {
    return planosEmpresariaisImg;
  }

  return planosCorporativos;
}

export default function Plan({ plan, selectedPlan }) {
  return (
    <PlanStyled selectedPlan={selectedPlan}>
      <PlanImageStyled src={getImage(plan.name)} />

      <PlanNameStyled selectedPlan={selectedPlan}>{plan.name}</PlanNameStyled>

      <PlanDescriptionStyled>{plan.description}</PlanDescriptionStyled>
    </PlanStyled>
  );
}
