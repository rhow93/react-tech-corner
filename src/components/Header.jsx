import React from 'react';
import '../styles/header.css';
import logo from '../styles/assets/columbia-road-logo.png';

const Header = (props) => (
  <div className="header">
    <img src={logo} alt="CR-Logo" className="cr-logo"/>
  </div>
);

export default Header;
