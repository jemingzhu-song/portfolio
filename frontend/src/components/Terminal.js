import React from 'react';
import { ReactTerminal } from 'react-terminal';

import './Terminal.css';

function Terminal() {
  // Define commands here
  const commands = {
    whoami: 'jackharper',
    cd: (directory) => `changed path to ${directory}`,
  };

  return (
    <div className='Terminal'>
      <div className='Terminal-terminal'>
        <ReactTerminal
          commands={commands}
          themes={{
            customTheme: {
              themeBGColor: '#313131',
              themeToolbarColor: '#DBDBDB',
              themeColor: '#FFFEFC',
              themePromptColor: '#FFFFF',
            },
          }}
          theme='customTheme'
        />
      </div>
    </div>
  );
}

export default Terminal;
