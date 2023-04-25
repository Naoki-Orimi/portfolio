import React from "react";
import styled from "styled-components";
import Portfolio from "../assets/img/Portfolio.png";
import SelectModal from "./SelectModal";

const Main = () => {
  return (
    <StyledMain>
      <Message>テストテスト</Message>
      {/* <Message>スーパーエンジニアを目指して</Message> */}
      <Heading>
        <img src={Portfolio}></img>
      </Heading>
      {/* TODO もーだる自体の表示もタイトルが出た後に出す */}
      <SelectModal>
      </SelectModal>
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
  animation-name: fadeDownAnime;
  animation-duration:5s;
  animation-fill-mode:forwards;

  @keyframes fadeDownAnime{
    from {
      opacity: 0;
      transform: translateY(0);
    }

    to {
      opacity: 1;
      transform: translateY(100px);
    }
`;

export default Main;
