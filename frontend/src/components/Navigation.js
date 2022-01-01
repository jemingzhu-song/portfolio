import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

function Navigation() {
  return (
    <div className='Navigation'>
      <ul className='Navigation-navigation-options'>
        <Link to='/' className='Navigation-navigation-link'>
          <li>Home</li>
        </Link>
        <Link to='/about' className='Navigation-navigation-link'>
          <li>About</li>
        </Link>
        <Link to='/experience' className='Navigation-navigation-link'>
          <li>Experience</li>
        </Link>
        <Link to='/technology' className='Navigation-navigation-link'>
          <li>Technology Stack</li>
        </Link>
        <Link to='/contact' className='Navigation-navigation-link'>
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navigation;
