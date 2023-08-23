import { useState } from "react";
import styled from 'styled-components';


const ConWrap = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;
const SubText = styled.p`
  width: 25%;
  text-align: center;
`;
const ListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  border-top: 3px solid #000;
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
  font-weight: bold;
`;
const ListWrap = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
`;

export default function List () {
  let [title, setTitle] = useState([
    {id:0, title: 'Title 1', likes: 0, date: '2023. 8. 22.' },
    {id:1, title: 'Title 2', likes: 0, date: '2023. 8. 22.' },
    {id:2, title: 'Title 3', likes: 0, date: '2023. 8. 22.' },
  ]);

  function increaseLikes (indexToLike) {
    let likesList = [...title];
    likesList[indexToLike].likes += 1;
    setTitle(likesList);
  }

  return (
    <ConWrap>
      <ListTitle>
        <SubText>번호</SubText>
        <SubText>제목</SubText>
        <SubText>작성일</SubText>
        <SubText>추천</SubText>
      </ListTitle>
      {
        title.map(function (a,i) {
          return (
              <ListWrap key={a.id}>
                <SubText>{a.id +1}</SubText>
                <SubText>{a.title}</SubText>
                <SubText>{a.date}</SubText>
                <SubText onClick={() => increaseLikes(i)}>{a.likes} 👍🏻</SubText>
              </ListWrap>
          )
        })
      }
    </ConWrap>
  )
};