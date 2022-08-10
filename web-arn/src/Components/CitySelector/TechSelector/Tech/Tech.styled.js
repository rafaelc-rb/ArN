import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 50%;

  background-color: ${(props) =>
    props.selectedTech ? '#c83c3b' : 'white'};

  box-shadow: 0px 0px 50px grey;
`;
