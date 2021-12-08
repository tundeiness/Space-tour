import React, { useState } from 'react';

const Sidebar = () => {
  const [isActive, setIsActive] = useState('Home');

  const handleClick = (link) => {
    setIsActive(link);
  };
  return (
    <nav className="sidebar-nav">
      <div className="sidebar-nav__wrapper">
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
  );
};

export default Sidebar;
