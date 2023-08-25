import styled from 'styled-components';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 150px;
  text-align: center;
  margin-bottom: 40px;
`;

const Header = styled.div`
  color: #000;
  line-height: 150px;
  font-size: 45px;
  font-weight: 800;
  font-family: 'Black Han Sans', sans-serif;
`;

const SubHeader = styled.div`
  margin-top: -35px;
  font-weight: 500;
  color: #4d4d4d;
`;
export default function header () {
  return (
    <>
      <HeaderWrapper>
        <Header>
          CS CENTER
        </Header>
        <SubHeader>
          궁금한 내용을 확인하세요:)
        </SubHeader>
      </HeaderWrapper>
    </>
  )
}