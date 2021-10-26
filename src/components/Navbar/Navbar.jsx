import React, { useState, } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            CC23F
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Atividade 1
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/atividade-2'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Atividade 2
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Atividade-3'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Atividade 3
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;