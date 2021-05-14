import React from 'react';
import styled from 'styled-components';

function ButtonBox({ buttonName, runFunction }) {
  return (
    <ButtonBoxArea>
      <button onClick={runFunction}>{buttonName}</button>
    </ButtonBoxArea>
  );
}

const ButtonBoxArea = styled.div`
  display: flex;
  padding: 10px;
  width: 300px;

  button {
    padding: 5px 0;
    width: 100%;
    background-color: ${(props) => props.theme.color.navy};
    font-size: 20px;
    color: ${(props) => props.theme.color.white};
  }
`;

export default ButtonBox;
