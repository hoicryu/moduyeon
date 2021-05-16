import React from 'react';
import styled from 'styled-components';

function ButtonBox({ buttonName, runFunction, size, enterKeyAcitive }) {
  return (
    <ButtonBoxArea>
      <Button onClick={runFunction} size={size} onKeyPress={enterKeyAcitive}>
        {buttonName}
      </Button>
    </ButtonBoxArea>
  );
}

const ButtonBoxArea = styled.div`
  display: flex;
  padding: 10px;
`;

const Button = styled.button`
  padding: 5px;
  width: ${(props) => (props.size === 'big' ? '300px' : 'auto')};
  background-color: ${(props) => props.theme.color.navy};
  font-size: 20px;
  color: ${(props) => props.theme.color.white};
`;

export default ButtonBox;
