import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav>
      <div className="nav__logo">
        <a href="#"><img src={logo} alt="logo" /></a>
      </div>
      <ul className="nav__links">
        <li className="link"><a href="#">Home</a></li>
        <li className="link"><a href="#">Program</a></li>
        <li className="link"><a href="#">Service</a></li>
        <li className="link"><a href="#">About</a></li>
        <li className="link"><a href="#">Community</a></li>
      </ul>
      <button className="btn">Join Now</button>
    </nav>
  );
};

export default Navbar;