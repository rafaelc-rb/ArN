import styled from 'styled-components';

export default styled.h2`
  padding: 10px 10px 0px 10px;

  ${(props) =>
    props.selectedPlan
      ? 'font-size: 1.5rem; color: #3f1113;'
      : 'font-size: 1.3rem; color: grey;'}

  font-weight: bold;
`;
