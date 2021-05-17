import React from 'react';
import './App.css';
import Header  from './components/Header';
// import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
// import Contact from './pages/Contact';
// import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        {/* <Route exact path='/'> */}
          {/* <Home /> */}
          <About />
          <Footer />
        {/* </Route> */}
      </div>
    // </BrowserRouter>
  );
}

export default App;
