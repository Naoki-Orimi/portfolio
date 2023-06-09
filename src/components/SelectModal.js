import React from "react";
import styled from "styled-components";
import Portfolio from "../assets/img/Portfolio.png";

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

const SelectModal = () => {
  return (
    <StyledSelectModal>
        {/* TODO ▶︎ の部分はカーソルのforcusでつくようにする */}
        <div><Link className="start" to="/start">  ▶︎ 冒険をはじめる</Link></div>

        <div><Link className="status" to="/status">▶︎ つよさを見る</Link></div>
    </StyledSelectModal>
  );
};

const StyledSelectModal = styled.main
`
    color: white;
    & a {
        color: white;
        padding-top: 10px;
        padding-bottom: 10px;
    }
`

export default SelectModal;