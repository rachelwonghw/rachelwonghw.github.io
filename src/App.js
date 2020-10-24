import React from 'react';
import './App.css';
import Header  from './components/Header';
import Home from './pages/Home';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Route exact path='/'>
          <Home />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
