import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import HomePage from "./Pages/Homepage/Homepage";
import ListPoints from "./Pages/ListPoints/ListPoints";
import RegisterPoint from "./Pages/RegisterPoint/RegisterPoint";

const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        height: 100vh;
        background-color: #f0f0f5;
        font-family:'Ubuntu', sans-serif;
        font-size: max(1.5vw, 16px);
        color: #322153;
    }

    html{
      scroll-behavior: smooth;
    }
`;

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Route exact path="/" component={HomePage} />
      <Route path="/list-points" component={ListPoints} />
      <Route path="/register-point" component={RegisterPoint} />
    </BrowserRouter>
  );
};

export default Router;
