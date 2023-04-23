import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
      <Foot>
        <Message>Footer</Message>
      </Foot>
    );
  };

const Foot = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 18px;
`;
export default Footer;