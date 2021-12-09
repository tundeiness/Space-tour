/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../static/assets/image/shared/logo.svg';
import useToggle from '../../utils/useToggle';
// import useMediaQuery from '../../utils/useMediaQuery';
import Sidebar from '../sidebar/sidebar';

const Header = () => {
  const [isActive, setIsActive] = useState('Home');
  const [isOpen, setIsOpen] = useToggle();

  const handleClick = (link) => {
    setIsActive(link);
  };

  // const { screen } = useMediaQuery();
  // const breakpoint = 900;

  return (
    <header className="header border-red">
      <picture className="header__logo-wrap">
        <source srcSet={Logo} media="prefers-color-scheme: dark" />
        <img
          src={Logo}
          alt="space tourism logo"
          className="logo"
          loading="lazy"
        />
      </picture>

      <button
        type="button"
        aria-controls="primary-navigation"
        className={isOpen === false ? 'open-sidebar' : 'close-sidebar'}
        onClick={setIsOpen}
      >
        <span className="sr-mobile" aria-expanded="false" />
      </button>

      <nav className="nav">
        <div>
          <li
            className={isActive === 'Home' ? 'active' : 'inactive'}
            onClick={() => handleClick('Home')}
            aria-hidden="true"
          >
            <a className="ff-sans" href="home.html">
              <span>00</span>
              Home
            </a>
          </li>
          <li
            className={isActive === 'Destination' ? 'active' : 'inactive'}
            onClick={() => handleClick('Destination')}
            aria-hidden="true"
          >
            <a className="ff-sans" href="destination.html">
              <span>01</span>
              Destination
            </a>
          </li>
          <li
            className={isActive === 'Crew' ? 'active' : 'inactive'}
            onClick={() => handleClick('Crew')}
            aria-hidden="true"
          >
            <a className="ff-sans" href="crew.html">
              <span>02</span>
              Crew
            </a>
          </li>
          <li
            className={isActive === 'Technology' ? 'active' : 'inactive'}
            onClick={() => handleClick('Technology')}
            aria-hidden="true"
          >
            <a className="ff-sans" href="technology.html">
              <span>03</span>
              Technology
            </a>
          </li>
        </div>
      </nav>
      {isOpen ? <Sidebar /> : ''}
    </header>
  );
};

export default Header;
