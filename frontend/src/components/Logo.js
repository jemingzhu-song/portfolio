import './Logo.css';

import Optus from '../images/logos/optus.png';
import KPMG from '../images/logos/kpmg.png';
import Kirribilli from '../images/logos/kirribilli-tutor.png';
import Octane from '../images/logos/octane.png';
import ITA from '../images/logos/ita.png';
import Macquarie from '../images/logos/macquarie.png';

const Logo = ({ logo }) => {
  if (logo === 'Optus') {
    return <img src={Optus} class='optus' alt='Optus!'></img>;
  } else if (logo === 'KPMG') {
    return <img src={KPMG} class='kpmg' alt='KPMG!'></img>;
  } else if (logo === 'Kirribilli') {
    return (
      <img src={Kirribilli} class='kirribilli' alt='Kirribilli Tutor!'></img>
    );
  } else if (logo === 'Octane') {
    return (
      <img src={Octane} class='octane' alt='Octane Software Solutions!'></img>
    );
  } else if (logo === 'ITA') {
    return (
      <img src={ITA} class='ita' alt='Innovative Technology Academy!'></img>
    );
  } else if (logo === 'Macquarie Group') {
    return <img src={Macquarie} class='macquarie' alt='Macquarie Group!'></img>;
  }
};

export default Logo;
