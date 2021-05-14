import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

function Nav() {
  const TOKEN = window.localStorage.getItem('TOKEN');

  const history = useHistory();

  const goToPage = (e) => {
    const { className } = e.target;
    if (className === 'toForum') {
      history.push('/forum');
    }
    if (className === 'toProfile') {
      history.push('/profile');
    }
  };

  return (
    <NavArea>
      <img
        className="logo"
        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/40de76d5-7692-422d-95da-a458c9642cd1/aiffel_logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210514T071452Z&X-Amz-Expires=86400&X-Amz-Signature=5c98d60c229eedf1893cf9ee7d83b9ecc36430f0c472b9ea17a0fe428a9e71ce&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22aiffel_logo.png%22"
      ></img>
      <p className="toForum" onClick={goToPage}>
        forum
      </p>
      <div className="profile">
        <img
          className="toProfile"
          onClick={goToPage}
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b9b42617-783f-48c5-a20e-f57c4a5c7781/profile.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210514T071921Z&X-Amz-Expires=86400&X-Amz-Signature=abb44a0313369cfda3b782a1fb9836d044ce833a7539baeb9b38d8044f5f39dc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22profile.png%22"
        ></img>
        <p className="toProfile" onClick={goToPage}>
          {TOKEN}
        </p>
      </div>
    </NavArea>
  );
}

const NavArea = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
  height: 70px;
  background-color: ${(props) => props.theme.color.gray};

  .logo {
    padding: 10px;
    width: 170px;
    height: 50px;
  }

  .toForum {
    font-size: 50px;
    cursor: pointer;
  }

  div {
    display: flex;
    align-items: flex-end;
    padding: 10px;
    cursor: pointer;
    transition: 1s;

    &:hover {
      transform: scale(1.1);
    }

    img {
      width: 50px;
      height: 50px;
    }

    p {
      margin-left: 5px;
      font-size: 30px;
    }
  }
`;

export default Nav;
