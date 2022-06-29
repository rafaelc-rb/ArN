import styled from 'styled-components';

export default styled.p`
  color: ${(props) => (props.selectedArea ? 'white' : 'black')};

  font-weight: bold;
  font-size: 1.3rem;
`;
