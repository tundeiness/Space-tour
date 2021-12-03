/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../static/assets/image/shared/logo.svg';
import useToggle from '../../utils/useToggle';

const Header = () => {
  const [isActive, setIsActive] = useState('Home');
  const [isOpen, setIsOpen] = useToggle();

  const handleClick = (link) => {
    setIsActive(link);
  };

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
          >
            <a className="ff-sans" href="home.html">
              <span>00</span>
              Home
            </a>
          </li>
          <li
            className={isActive === 'Destination' ? 'active' : 'inactive'}
            onClick={() => handleClick('Destination')}
          >
            <a className="ff-sans" href="destination.html">
              <span>01</span>
              Destination
            </a>
          </li>
          <li
            className={isActive === 'Crew' ? 'active' : 'inactive'}
            onClick={() => handleClick('Crew')}
          >
            <a className="ff-sans" href="crew.html">
              <span>02</span>
              Crew
            </a>
          </li>
          <li
            className={isActive === 'Technology' ? 'active' : 'inactive'}
            onClick={() => handleClick('Technology')}
          >
            <a className="ff-sans" href="technology.html">
              <span>03</span>
              Technology
            </a>
          </li>
        </div>
      </nav>
    </header>
  );
};

export default Header;
