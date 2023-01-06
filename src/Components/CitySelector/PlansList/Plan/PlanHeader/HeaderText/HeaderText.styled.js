import styled from 'styled-components';

export default styled.p`
  margin: 0px;

  font-weight: bold;
  font-size: ${(props) => (props.size === 'big' ? '2rem' : '1rem')};

  color: white;
`;
