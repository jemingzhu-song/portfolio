import { useState } from 'react';

import './ExperienceCard.css';

import PropTypes from 'prop-types';
import Logo from './Logo';

const ExperienceCard = ({ company, role, dates, logo }) => {
  const [flip, setFlip] = useState(false);

  return (
    <div
      class={`experience-card ${flip ? 'flip' : ''}`}
      onMouseEnter={() => setFlip(!flip)}
      onMouseLeave={() => setFlip(!flip)}
    >
      <div class='front'>
        <p class='text-company'>{company}</p>
        <p class='text-role'>{role}</p>
        <p class='text-tenure'>{dates}</p>
      </div>
      <div class='back'>
        <Logo logo={logo} />
      </div>
    </div>
  );
};

export default ExperienceCard;

ExperienceCard.propTypes = {
  company: PropTypes.string,
  role: PropTypes.string,
  dates: PropTypes.string,
  logo: PropTypes.string,
};
