import React from 'react'
import styled from 'styled-components';

const BtnWrap = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
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

export default function writeBtn() {
  return (
    <BtnWrap>
      <Btn> 글 쓰기 </Btn>
    </BtnWrap>
  )
}
