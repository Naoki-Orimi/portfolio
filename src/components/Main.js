import React from "react";
import styled from "styled-components";
import Portfolio from "../assets/img/Portfolio.png";

const Main = () => {
  return (
    <StyledMain>
      <Heading>
        <img src={Portfolio}></img>
      </Heading>
      <Message>ようこそ、DQ風サイトへ！</Message>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  & img {
    animation-name: fadeUpAnime;
    animation-duration:3s;
    animation-fill-mode:forwards;
    opacity:0;

    @keyframes fadeUpAnime{
      from {
        opacity: 0;
        transform: translateY(100px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;

const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 18px;
`;

export default Main;
