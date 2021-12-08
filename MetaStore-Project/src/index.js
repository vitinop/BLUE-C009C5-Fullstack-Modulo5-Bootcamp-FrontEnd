import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);