import styled from 'styled-components';

export default styled.div`
  width: ${(props) => (props.selectedArea ? '50%' : '20%')};

  border: 2px solid ${(props) => (props.selectedArea ? 'white' : '#c83c3b')};
`;
