import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;

  button {
    padding: 20px;
    margin: 10px;

    border-radius: 5px;
    border-style: hidden;
  }

  button:first-child {
    background-color: white;
    color: #ea4d54;
  }

  button:last-child {
    background-color: #ea4d54;
    color: white;
  }
`;
