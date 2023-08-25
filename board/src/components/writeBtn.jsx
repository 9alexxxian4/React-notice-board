import React from 'react'
import styled from 'styled-components';

const BtnWrap = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 70px;
`;

const Btn = styled.button`
  border: none;
  width: 100px;
  height: 40px;
  border-radius: 20px;
  background-color: #e9e9e9;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

const P = styled.h1`
  font-weight: 700;
  font-size: 32px;
`;

export default function writeBtn({ pageTitles }) {
  const location = window.location.pathname;
  const pageTitle = pageTitles[location] || '';

  return (
    <>
      <BtnWrap>
        <P>{pageTitle}</P>
        <Btn> 글 쓰기 </Btn>
      </BtnWrap>
    </>
  )
}
