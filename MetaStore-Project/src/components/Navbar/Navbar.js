import React from 'react';
import { BsList } from 'react-icons/bs';
import './Navbar.css';
import logo from './logoMetaVetor.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-list'>
                <BsList />
            </div>
            <div className='navbar-logo' >
                <a href='/'>
                    <img src={logo} alt='metastore'></img><h4>metastore</h4>
                    
                </a>
                
            </div>
        </div>
    )
}

export default Navbar;