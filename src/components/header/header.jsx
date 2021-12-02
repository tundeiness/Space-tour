/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../static/assets/image/shared/logo.svg';

const Header = () => {
  const test = 1;
  return (
    <header className="header border-red">
      {/* <div className="pry-header__img-section border-red"> */}
      <picture className="header__logo-wrap">
        <source srcSet={Logo} media="prefers-color-scheme: dark" />
        <img
          src={Logo}
          alt="space tourism logo"
          className="logo"
          loading="lazy"
        />
      </picture>
      {/* </div> */}
      <button
        type="button"
        aria-controls="primary-navigation"
        className="border-red"
      >
        <span className="sr-mobile" aria-expanded="false" />
      </button>
      <nav className="nav">
        {/* <ul> */}
        <li>
          <a className="ff-sans" href="index.html">
            <span>00</span>
            Home
          </a>
        </li>
        <li>
          <a className="ff-sans" href="index.html">
            <span>01</span>
            Destination
          </a>
        </li>
        <li>
          <a className="ff-sans" href="index.html">
            <span>02</span>
            Crew
          </a>
        </li>
        <li>
          <a className="ff-sans" href="index.html">
            <span>03</span>
            Technology
          </a>
        </li>
        {/* </ul> */}
      </nav>
    </header>
  );
};

export default Header;
