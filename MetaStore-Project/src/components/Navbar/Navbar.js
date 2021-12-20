import React from "react";
import styled from "styled-components";
import BurgerNav from "./BurguerNav";
import logo from "./images/Logo-Gif-Text.gif";

const Nav = styled.nav`
  height: 100%;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;

  @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@500&display=swap');
  
  *{
    font-family: 'Source Code Pro', monospace;
  }
  .nav-burguer-logo {
    margin-bottom: 65px;
   
  }

  .navbar-logo img {
    width: 45px;
  }
  .nav-master {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    font-size: 20px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="nav-master">
      <BurgerNav />
        <div className="nav-burguer-logo"></div>
        <div className="navbar-logo">
          <a href="/">
            <img src={logo} alt="metastore"></img>
          </a>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
