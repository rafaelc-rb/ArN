import styled from 'styled-components';

export default styled.p`
  font-size: ${(props) => (props.selectedCity ? '1.2rem' : '1rem')};

  ${(props) => (props.selectedCity ? 'color: #e64950; font-weight: bold;' : '')}
`;
