import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  width: 450px;
  height: 50px;
  margin: 0 auto;
  border-radius: 50px;
  background-color: #e9e9e9;
`;

const Li = styled.li`
  width: calc(100% / 3);
  float: left;
  margin: 0 auto;
  text-align: center;
  line-height: 50px;

  // class on 가지면 font-weight 바뀌는 것처럼 
  font-weight: ${({ active }) => (active ? '800' : 'normal')};
`;

const menuItems = [
  { to: '/', title: '공지사항' },
  { to: '/UsuallyQuestion', title: '자주 묻는 질문' },
  { to: '/ManToManQuestion', title: '1:1 문의' },
];

export default function MoveToPage({ setSelectedPage }) {
  const [activeItem, setActiveItem] = useState('공지사항');

  const handleLinkClick = (pageTitle) => {
    setSelectedPage(pageTitle);
    setActiveItem(pageTitle);
  };

  
  return (
    <Ul>
      {menuItems.map((menuItem) => (
        <Li
          key={menuItem.to}
          active={activeItem === menuItem.title}
        >
          <Link
            style={{ color: '#000', textDecoration: 'none' }}
            to={menuItem.to}
            onClick={() => handleLinkClick(menuItem.title)}
          >
            {menuItem.title}
          </Link>
        </Li>
      ))}
    </Ul>
  );
}
