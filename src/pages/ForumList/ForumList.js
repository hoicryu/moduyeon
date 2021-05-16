import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import InputBox from '../components/InputBox/InputBox';
import ButtonBox from '../components/ButtonBox/ButtonBox';
import WhiteButtonBox from '../components/ButtonBox/WhiteButtonBox';
import PostList from './PostList';

import { FORUM_API } from '../../config';

import styled from 'styled-components';

function ForumList() {
  const [postData, setPostData] = useState([]);
  const [AllPostData, setAllPostData] = useState([]);
  const [conditionOfPost, setConditionOfPost] = useState({
    page: 1,
    limit: 5,
  });
  const [conditionOfsearch, setConditionOfsearch] = useState('');

  const headData = {
    title: '제목',
    content: '본문',
    tag: {
      name: '태그',
    },
    time: '시간',
  };

  useEffect(() => {
    getPostData();
    getAllPostData();
  }, []);
  useEffect(() => {
    getPostData();
  }, [conditionOfPost]);

  const getPostData = () => {
    const { page, limit } = conditionOfPost;
    fetch(`${FORUM_API}?_page=${page}&_limit=${limit}&_sort=id&_order=DESC`)
      .then((res) => res.json())
      .then((res) => setPostData(res))
      .catch((error) => console.error('Error:', error));
  };

  const getAllPostData = () => {
    fetch(`${FORUM_API}?_sort=id&_order=DESC`)
      .then((res) => res.json())
      .then((res) => setAllPostData(res))
      .catch((error) => console.error('Error:', error));
  };

  const setPageNation = (e) => {
    const { name } = e.target;
    if (name == '1') {
      setConditionOfPost({ ...conditionOfPost, page: 1 });
    }
    if (name == '2') {
      setConditionOfPost({ ...conditionOfPost, page: 2 });
    }
    if (name == '3') {
      setConditionOfPost({ ...conditionOfPost, page: 3 });
    }
  };

  const setUpConditionOfsearch = (e) => {
    const { value } = e.target;
    setConditionOfsearch(value);
  };

  const runSearch = () => {
    if (!conditionOfsearch) return alert('검색어를 입력하세요!');
    getAllPostData();
    const FiteredData = AllPostData.filter((data) => {
      if (data.tag.name == conditionOfsearch) {
        return true;
      }
      if (data.title.includes(conditionOfsearch)) {
        return true;
      }
      if (data.content.includes(conditionOfsearch)) {
        return true;
      }
      return false;
    });
    if (!FiteredData.length) {
      alert('결과를 찾지 못했습니다!');
    } else {
      setPostData(FiteredData);
    }
  };

  const history = useHistory();
  const goToDetailPage = (id) => {
    history.push(`/forum/${id}`);
  };

  return (
    <ForumListArea>
      <div className="inputBtnWrapper">
        <InputBox
          inputName="serch"
          labelName="검색"
          runFunction={setUpConditionOfsearch}
        />
        <ButtonBox size="small" buttonName="검색" runFunction={runSearch} />
        <ButtonBox size="small" buttonName="초기화" runFunction={getPostData} />
      </div>
      <div className="PostWrapper">
        <ButtonBox size="small" buttonName="글작성" />
        <PostListWrapper>
          <PostList postData={headData} />
          {postData &&
            postData.map((list, idx) => {
              return (
                <PostList
                  key={list.id}
                  postData={list}
                  runFunction={goToDetailPage}
                  name={list.id}
                />
              );
            })}
        </PostListWrapper>
      </div>
      <div className="pagenation">
        <WhiteButtonBox buttonName="1" runFunction={setPageNation} />
        <WhiteButtonBox buttonName="2" runFunction={setPageNation} />
        <WhiteButtonBox buttonName="3" runFunction={setPageNation} />
      </div>
    </ForumListArea>
  );
}

const ForumListArea = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .inputBtnWrapper {
    display: flex;
  }

  .PostWrapper {
    position: relative;
    border: 1px solid ${(props) => props.theme.color.black};

    button {
      position: absolute;
      right: 20px;
    }
  }
  .pagenation {
    display: flex;
  }
`;

const PostListWrapper = styled.div`
  margin-top: 50px;
`;

export default ForumList;
