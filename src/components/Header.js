import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <Title>DQ風サイト</Title>
      <Navigation>
        <li>ホーム</li>
        <li>ストーリー</li>
        <li>キャラクター</li>
        <li>モンスター</li>
      </Navigation>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #f5deb3;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 20px;
`;

const Navigation = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  & li {
    margin-left: 20px;
  }
`;

export default Header;
