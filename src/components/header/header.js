import { NavLink } from 'react-router-dom';
import React from 'react';
import './header.css';
import logo from '../../assets/planet2.png';

function Header() {
  return (
    <>
      <nav className="nav" id="nav">
        <div className="container">
          <div className="nav__container__parnav">
            <div className="nav__container__parnav__brand">
              <a href="#logo" className="nav__container__parnav__brand__logo">
                <img alt="logo-top" src={logo} className="nav__container__parnav__brand__logo__img" />
                <h3 className="space__heading">Space Traveler&#39;s Hub</h3>
              </a>
            </div>
            <ul className="nav__container__parnav__ul">
              <li><NavLink to="/rocket">Rockets</NavLink></li>
              <li><NavLink to="/mission">mission</NavLink></li>
              <hr />
              <li><NavLink to="/profile">profile</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
