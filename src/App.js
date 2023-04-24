import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>

  );
}

export default App;
