import React from 'react';
import { ReactTerminal } from 'react-terminal';

import './Terminal.css';

function Terminal() {
  // Define commands here
  const commands = {
    help: 'Available Commands: \n ls: View the current directory',
    whoami: 'jeming zhu-song',
    cd: (directory) => `changed path to ${directory}`,
  };

  return (
    <div className='Terminal'>
      <div className='Terminal-terminal'>
        <ReactTerminal
          commands={commands}
          themes={{
            customTheme: {
              themeBGColor: '#FFF',
              themeToolbarColor: '#DBDBDB',
              themeColor: '#416bf7',
              themePromptColor: '#416bf7',
            },
          }}
          theme='customTheme'
        />
      </div>
    </div>
  );
}

export default Terminal;
