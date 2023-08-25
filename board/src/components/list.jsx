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
const DeleteBtn = styled.button`
  width: 65px;
  height: 35px;
  background-color: #e4e4e4;
  border: none;
  border-radius: 25px;
  font-weight: 600;
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
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`; 

const InputTitle = styled.input`
  width: 80%;
  height: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const InputContent = styled.input`
  width: 80%;
  height: 500px;
  margin-top: 20px;
`;

const InputSubmit = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100px;
  height: 30px;
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

  let [newText, setNewText] = useState('');
  let [content, setContent] = useState('');

  function addText() {
    let textList = [...title];
    if (!newText) {
      alert('내용이 없습니다');
    } else {
      let now = new Date().toLocaleDateString('ko-KR');
      textList.push({id: textList.length , title: newText, likes: 0, date: now });
      setTitle(textList);
      setNewText(now);
      setNewText('');
      setContent('');
    }
  };

  function deleteText (indexToDelete) {
    let textList = [...title];
    textList.splice(indexToDelete, 1);
    setTitle(textList); 
  }

  return (
    <>
      <ConWrap>
        <ListTitle>
          <SubText>번호</SubText>
          <SubText>제목</SubText>
          <SubText>작성일</SubText>
          <SubText>추천</SubText>
          <SubText></SubText>
        </ListTitle>
        {
          title.map(function (a,i) {
            return (
                <ListWrap key={a.id}>
                  <SubText>{a.id +1}</SubText>
                  <SubText>{a.title}</SubText>
                  <SubText>{a.date}</SubText>
                  <SubText onClick={() => increaseLikes(i)}>{a.likes} 👍🏻</SubText>
                  <SubText><DeleteBtn onClick={() => deleteText(i)}>삭제</DeleteBtn></SubText>
                </ListWrap>
            )
          })
        }
      </ConWrap>
      <Form>
        <p>제목 :</p> <InputTitle type="text" name="name" onChange={(e) => setNewText(e.target.value)} value={newText} />
        <p>내용 :</p> <InputContent type="text" name="content" onChange={ () => setContent()} value={content} />
        <InputSubmit onClick={addText}>제출</InputSubmit>
      </Form>
    </>
  )
};