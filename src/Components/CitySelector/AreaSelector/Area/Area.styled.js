import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 10px;

  width: 250px;
  height: 80px;

  background-color: ${(props) => (props.selectedArea ? '#c83c3b' : 'white')};

  box-shadow: 0px 0px 50px grey;

  border-radius: 10px;
`;
