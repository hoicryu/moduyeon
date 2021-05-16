import React from 'react';

import styled from 'styled-components';

function PostList({ postData, goToDetailPage, name }) {
  const { title, content, isLiked, tag } = postData;

  return (
    <PostListArea onClick={() => goToDetailPage(name)}>
      <h4>{title}</h4>
      <span>{content.length >= 10 ? content.slice(0, 10) : content}</span>
      <Tag className={tag.color}>{tag.name}</Tag>
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
  }
`;
const Tag = styled.span`
  background-color: ${(props) => props.className};
`;

export default PostList;
