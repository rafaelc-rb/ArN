import styled from 'styled-components';

export default styled.div`
  margin: 20px;

  width: ${(props) => (props.selectedCity ? '2.5rem' : '2rem')};
  height: ${(props) => (props.selectedCity ? '2.5rem' : '2rem')};

  background-color: ${(props) => (props.selectedCity ? '#dc454a' : 'white')};

  outline: 3px solid ${(props) => (props.selectedCity ? '#dc454a' : '#929292')};
  border: 3px solid white;
  border-radius: 50%;
`;
