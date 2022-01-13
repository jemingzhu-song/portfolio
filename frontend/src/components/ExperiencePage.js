import './ExperiencePage.css';
import ExperienceCard from './ExperienceCard';

const ExperiencePage = () => {
  return (
    <section class='experience section' id='Experience'>
      <div class='experience-container'>
        <p style={{ color: 'cornflowerblue' }}>
          Hover over each card for a surprise!
        </p>
        <div class='experience-content grid'>
          <ExperienceCard
            company='Macquarie Group'
            role='Technology Intern'
            dates="Dec '21 - Feb '21"
            logo='Macquarie Group'
          />
          <ExperienceCard
            company='Optus'
            role='Software Engineering Intern'
            dates="Mar '21 - Aug '21"
            logo='Optus'
          />
          <ExperienceCard
            company='KPMG'
            role='Audit & Assurance Vacationer'
            dates="Dec '20 - Feb '21"
            logo='KPMG'
          />
        </div>
        <div class='experience-content grid'>
          <ExperienceCard
            company='Kirribilli Tutor'
            role='High School Tutor'
            dates="Jan '19 - Dec '20"
            logo='Kirribilli'
          />
          <ExperienceCard
            company='Octane Software Solutions'
            role='Data Analyst Intern'
            dates="Nov '19 - Feb '20"
            logo='Octane'
          />
          <ExperienceCard
            company='Innovative Technology Academy'
            role='Mathematics Tutor'
            dates="Mar '20 - Aug '21"
            logo='ITA'
          />
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
