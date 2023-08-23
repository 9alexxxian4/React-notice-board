import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  width: 450px;
  height: 50px;
  margin: 0 auto;
  border-radius: 50px;
  background-color: #e9e9e9;
`;

const Li = styled.li`
  width: calc(100%/3);
  float: left;
  margin: 0 auto;
  text-align: center;
  line-height: 50px;

  &:hover {
    font-weight: 700;
  }
`;


export default function moveToPage () {
  return (
    <Ul>
      <Li>
        <Link style={{color: '#000', textDecoration: 'none'}} to='/' >공지사항</Link>
      </Li>
      <Li>
        <Link style={{color: '#000', textDecoration: 'none'}} to='/UsuallyQuestion' >자주 묻는 질문</Link>
      </Li>
      <Li>
        <Link style={{color: '#000', textDecoration: 'none'}} to='/ManToManQuestion' >1:1 문의</Link>
      </Li>
    </Ul>
  )
};


