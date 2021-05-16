import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ButtonBox from '../components/ButtonBox/ButtonBox';

import { FORUM_API } from '../../config';

import styled from 'styled-components';

function ForumDetail(props) {
  const [detailData, setDetailData] = useState({
    id: 0,
    title: '',
    content: '',
    isLiked: false,
    tag: {},
  });
  const [AllPostData, setAllPostData] = useState([]);

  useEffect(() => {
    getDetailData();
  }, []);

  const getDetailData = () => {
    fetch(`${FORUM_API}?id=${props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => setDetailData(...res))
      .catch((error) => console.error('Error:', error));
  };

  const likeToggle = () => {
    fetch(`${FORUM_API}/${props.match.params.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isLiked: !detailData.isLiked,
      }),
    })
      .then((res) => res.json())
      .catch((error) => console.error('Error:', error))
      .finally(() => getDetailData());
  };

  const history = useHistory();
  const deleteForum = () => {
    if (!window.confirm('정말 지우시겠습니까?')) return;
    fetch(`${FORUM_API}/${props.match.params.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => history.push('/forum'))
      .catch((error) => console.error('Error:', error));
  };

  const { content, title, isLiked, tag } = detailData;
  return (
    <ForumDetailArea>
      <h2>{detailData && title}</h2>
      <Tag className={tag.color}>{detailData && tag.name}</Tag>
      <p>{detailData && content}</p>
      <div className="imgBtnBox">
        <img
          src={isLiked ? '/images/like.png' : '/images/heart.png'}
          alt="heart"
          onClick={likeToggle}
        ></img>
        <ButtonBox buttonName="삭제" runFunction={deleteForum} />
      </div>
    </ForumDetailArea>
  );
}

const ForumDetailArea = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 20px;
    font-size: 30px;
  }

  p {
    margin-bottom: 20px;
    width: 300px;
    font-size: 20px;
  }

  .imgBtnBox {
    display: flex;
    align-items: center;

    img {
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }
`;

const Tag = styled.span`
  margin-bottom: 20px;
  font-size: 20px;
  background-color: ${(props) => props.className};
`;

export default ForumDetail;
