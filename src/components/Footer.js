import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
      <StyledFooter>
        <Message>Footer</Message>
      </StyledFooter>
    );
  };

const StyledFooter = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
`;

const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 18px;
`;
export default Footer;