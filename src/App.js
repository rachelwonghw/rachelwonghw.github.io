import React from 'react';
import './App.css';
import Header  from './components/Header';
import Home from './pages/Home';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Home />
      </div>
    </HashRouter>
  );
}

export default App;
