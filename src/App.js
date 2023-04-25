import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import styled from "styled-components";

import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <StyledApp>
            <Header />
              <Main />
            <Footer />
        </StyledApp>
      </Router>
    </div>
  );
}

const StyledApp = styled.header`
  background-color: black;
  font-family: 'DotGothic16', sans-serif;
  color: white;

`;

export default App;
