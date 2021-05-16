import React from 'react';
import styled from 'styled-components';

function WhiteButtonBox({ buttonName, runFunction, size, enterKeyAcitive }) {
  return (
    <WhiteButtonBoxArea>
      <Button
        onClick={runFunction}
        size={size}
        onKeyPress={enterKeyAcitive}
        name={buttonName}
      >
        {buttonName}
      </Button>
    </WhiteButtonBoxArea>
  );
}

const WhiteButtonBoxArea = styled.div`
  display: flex;
  padding: 10px;
`;

const Button = styled.button`
  padding: 5px;
  width: ${(props) => (props.size === 'big' ? '300px' : 'auto')};
  background-color: ${(props) => props.theme.color.white};
  font-size: 20px;
  color: ${(props) => props.theme.color.black};
  border: 1px solid ${(props) => props.theme.color.black};
`;

export default WhiteButtonBox;
