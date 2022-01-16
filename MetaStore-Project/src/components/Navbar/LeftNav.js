import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    z-index: 2;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    top: 0;
    left: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const LeftNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a clasName="nav-Links" href="/" id="to-Home" aria-label="Home">Home</a></li>
      <li><a clasName="nav-Links" href="/catalog" id="to-Catalog" aria-label="Catalog">Catalog</a></li>
      <li><a clasName="nav-Links" href="/Login" id="to-Login" aria-label="Login">Login</a></li>
      <li><a clasName="nav-Links" href="/createAccount" id="to-Catalog" aria-label="CreateAccount">Sign Up</a></li>
      <li><a clasName="nav-Links" href="/myaccount" id="to-Account" aria-label="Account">My Account</a></li>
      <li><a clasName="nav-Links" href="/cart" id="to-Cart" aria-label="Cart">Cart</a></li>
    </Ul>
  )
}

export default LeftNav