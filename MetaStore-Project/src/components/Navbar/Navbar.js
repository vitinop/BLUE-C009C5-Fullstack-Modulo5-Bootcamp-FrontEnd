import React from "react";
import styled from "styled-components";
import BurgerNav from "./BurguerNav";
import logo from "./logoMetaVetor.png";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .nav-burguer-logo {
    padding: 15px 0;
  }
 

  .navbar-logo img {
    width: 32px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <BurgerNav />

      <div className="nav-burguer-logo"></div>
      <div className="navbar-logo">
        <a href="/">
          <img src={logo} alt="metastore"></img>
        </a>
      </div>
    </Nav>
  );
};

export default Navbar;
