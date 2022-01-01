import React from 'react';
import Terminal from './Terminal';

import './HomePage.css';
import Wave from '../images/wave.png';

function HomePage() {
  return (
    <div className='HomePage'>
      <div className='HomePage-instructions'>
        Type: "help" to see the list of available commands!
      </div>
      <div className='HomePage-terminal'>
        <Terminal />
      </div>
      <div className='HomePage-waves'>
        <div className='HomePage-wave wave1'></div>
        <div className='HomePage-wave wave2'></div>
        <div className='HomePage-wave wave3'></div>
        <div className='HomePage-wave wave4'></div>
      </div>
    </div>
  );
}

export default HomePage;
