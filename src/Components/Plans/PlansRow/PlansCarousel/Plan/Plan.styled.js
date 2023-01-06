import styled from 'styled-components';

export default styled.div`
  margin: 0px 10px;

  width: 300px;
  height: ${(props) => (props.selectedPlan ? '100' : '97')}%;

  border-radius: 10px;
  background-color: white;

  box-shadow: 0px 0px 100px lightGrey;

  ${(props) => (props.selectedPlan ? 'border: 2px solid red;' : '')}

  transition: height 500ms;
`;
