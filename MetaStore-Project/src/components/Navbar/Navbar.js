import React from "react";
import styled from "styled-components";
import BurgerNav from "./BurguerNav";
import logo from "./images/Logo-Gif-Text.gif";

const Nav = styled.nav`
  height: 100%;
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
    background: rgb(245,245,245);
    background: linear-gradient(90deg, rgba(245,245,245,1) 0%, rgba(255,255,255,1) 100%);
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
