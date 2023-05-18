import React from "react";
import styled from "styled-components";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <Title>
            <a href="/" style={{"text-decoration": "none", "color": "inherit", "cursor": "default"}}>Portfolio Top</a>
        </Title>
      <Navigation>
        <li>ストーリー</li>
        <li>ふっかつのじゅもん</li>
        {/* TODO パルプンテ表示して、ランダムで何か起こす*/}
        <li>？？？</li>
      </Navigation>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
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
