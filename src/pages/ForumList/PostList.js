import React from 'react';

import styled from 'styled-components';

function PostList({ postData, runFunction, name }) {
  const { title, content, isLiked, tag } = postData;

  return (
    <PostListArea onClick={() => runFunction(name)}>
      <h4>{title}</h4>
      <span>{content.length >= 10 ? content.slice(0, 10) : content}</span>
      <span className={tag.color}>{tag.name}</span>
      <span>시간</span>
    </PostListArea>
  );
}

const PostListArea = styled.div`
  display: flex;
  align-items: center;
  width: 800px;
  border-bottom: 1px solid ${(props) => props.theme.color.black};
  font-size: 25px;
  cursor: pointer;

  &:last-child {
    border-bottom: 0;
  }

  h4 {
    padding: 5px;
    width: 25%;
  }

  span {
    width: 25%;
    padding: 5px;
    background-color: ${(props) => {
      return props.className;
    }};
  }
`;

export default PostList;
