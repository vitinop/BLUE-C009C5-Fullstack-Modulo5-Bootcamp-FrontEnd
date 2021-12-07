import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);