import './App.css';
import { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState([
    { title: '남자코트 추천', likes: 0, date: '2023. 8. 22.' },
    { title: '강남우동맛집', likes: 0, date: '2023. 8. 22.' },
    { title: '파이썬 독학', likes: 0, date: '2023. 8. 22.' },
  ]);
  let [newText, newTextFunc] = useState('');

  function addText() {
    let textList = [...글제목];
    if (!newText) {
      alert('내용을 추가하세요');
    } else {
      let now = new Date().toLocaleDateString();
      textList.push({ title: newText, likes: 0, date: now });
      글제목변경(textList);
      newTextFunc('');
    }
  }

  function deleteText(indexToDelete) {
    let textList = [...글제목];
    textList.splice(indexToDelete, 1);
    글제목변경(textList);
  }

  function increaseLikes(indexToLike) {
    let textList = [...글제목];
    textList[indexToLike].likes += 1;
    글제목변경(textList);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>

      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4>
              {a.title}
              <span onClick={() => increaseLikes(i)}>😀 {a.likes}</span>
            </h4>
            <p>{a.date}</p>
            <button onClick={() => deleteText(i)}>삭제</button>
            <hr />
          </div>
        );
      })}
      <Modal />

      <input placeholder='제목을 정해주세요' onChange={(e) => newTextFunc(e.target.value)} />
      <button onClick={addText}>추가</button>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;