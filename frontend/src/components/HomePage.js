import React from 'react';
import Terminal from './Terminal';

import './HomePage.css';

function HomePage() {
  return (
    <div className='HomePage'>
      <div className='HomePage-terminal'>
        <Terminal />
      </div>
    </div>
  );
}

export default HomePage;
