import logo from './logo.svg';
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Start from './components/Start';
import Status from './components/Status';
import Footer from './components/Footer';
import styled from "styled-components";

function App() {
  return (
    <div className='App'>
      <StyledApp>
        <Header />
          <BrowserRouter>
            <Routes>
                <Route path="/" Component={Main} />
                <Route path="/start" Component={Start} />
                <Route path="/status" Component={Status} />
            </Routes>
          </BrowserRouter>
        <Footer />
    </StyledApp>
    </div>
  );
}

const StyledApp = styled.header`
  background-color: black;
  font-family: 'DotGothic16', sans-serif;
  color: white;

`;

export default App;
