import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { LOGIN_API } from '../../config';

import InputBox from '../components/InputBox/InputBox';
import ButtonBox from '../components/ButtonBox/ButtonBox';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setUpInputValue = (e) => {
    const { type, value } = e.target;
    if (type === 'email') setEmail(value);
    if (type === 'password') setPassword(value);
  };

  const validate = () => {
    const emailFilter =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (email.length <= 0 || password.length <= 0) {
      return alert('필수값을 입력해주세요!');
    }
    if (!emailFilter.test(email)) {
      return alert('이메일 형식을 확인해주세요!');
    }
    if (password.length >= 0 && password.length <= 10) {
      return alert('비밀번호는 10자리 이상 입력해주세요!');
    }
  };

  const history = useHistory();

  const tryOnLogin = () => {
    validate();
    fetch(LOGIN_API)
      .then((res) => res.json())
      .then((res) => {
        window.localStorage.setItem('TOKEN', res[0].username);
      })
      .then((res) => {
        const TOKEN = window.localStorage.getItem('TOKEN');
        if (TOKEN) {
          history.push('/forum');
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <LoginArea>
      <h1>login page</h1>
      <InputBox
        labelName="email"
        inputType="email"
        placeHolder="email을 입력하세요"
        runFunction={setUpInputValue}
      />
      <InputBox
        labelName="password"
        inputType="password"
        placeHolder="비밀번호를 입력하세요"
        runFunction={setUpInputValue}
      />
      <ButtonBox buttonName="login" runFunction={tryOnLogin} />
    </LoginArea>
  );
}

const LoginArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  h1 {
    font-size: 50px;
    margin-bottom: 30px;
  }
`;

export default Login;
