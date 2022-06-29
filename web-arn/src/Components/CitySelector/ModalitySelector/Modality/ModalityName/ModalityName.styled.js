import styled from 'styled-components';

export default styled.p`
  padding: 25px;
  color: ${(props) => (props.selectedModality ? 'white' : 'black')};

  font-weight: bold;
  font-size: 1.3rem;
`;
