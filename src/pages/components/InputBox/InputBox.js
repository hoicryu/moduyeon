import React from 'react';
import styled from 'styled-components';

function InputBox({
  inputName,
  labelName,
  placeHolder,
  inputType,
  runFunction,
}) {
  return (
    <InputBoxArea>
      <label>{labelName}</label>
      <input
        placeholder={placeHolder}
        type={inputType}
        name={inputName}
        onChange={runFunction}
      />
    </InputBoxArea>
  );
}

const InputBoxArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  padding: 10px;

  label {
    width: 40%;
    font-size: 35px;
  }

  input {
    margin-left: 10px;
    border: 1px solid ${(props) => props.theme.color.black};
    padding: 5px;
  }
`;

export default InputBox;
