import { NavLink } from 'react-router-dom';
import React from 'react';

function Header() {
  return (
    <>
      <nav className="nav" id="nav">
        <div className="container">
          <div className="nav__container__parnav">
            <div className="nav__container__parnav__brand">
              <a href="#logo">Books Store</a>
            </div>
            <ul className="nav__container__parnav__ul">
              <li><NavLink to="/rocket">Rockets</NavLink></li>
              <li><NavLink to="/mission">mission</NavLink></li>
              <li><NavLink to="/profile">profile</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
