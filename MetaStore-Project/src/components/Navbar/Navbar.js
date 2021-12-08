import React from "react";
import styled from "styled-components";
import BurgerNav from "./BurguerNav";
import logo from "./logoMetaVetor.png";

const Nav = styled.nav`
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;

  .nav-burguer-logo {
    padding: 15px 0;
  }

  .navbar-logo img {
    width: 35px;
  }
  .nav-master {
    display: flex;
    justify-content: space-between;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <BurgerNav />
      <div className="nav-master">
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
