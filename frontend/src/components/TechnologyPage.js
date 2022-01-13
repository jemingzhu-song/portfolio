import React from 'react';

import './TechnologyPage.css';
import CCP from '../images/aws-ccp.png';

function TechnologyPage() {
  return (
    <div className='TechnologyPage'>
      <div class='TechnologyPage-group' style={{ '--m': 15, '--tan': 0.41 }}>
        <img
          src={CCP}
          alt='AWS Certified Cloud Practitioner'
          style={{ height: '246px' }}
        ></img>
        <div className='TechnologyPage-technology java' style={{ '--i': 1 }}>
          Java
        </div>
        <div
          className='TechnologyPage-technology java-spring-boot'
          style={{ '--i': 2 }}
        >
          Java Spring Boot
        </div>
        <div
          className='TechnologyPage-technology java-swing'
          style={{ '--i': 3 }}
        >
          Java Swing
        </div>
        <div className='TechnologyPage-technology python' style={{ '--i': 4 }}>
          Python
        </div>
        <div className='TechnologyPage-technology c' style={{ '--i': 5 }}>
          C
        </div>
        <div className='TechnologyPage-technology sql' style={{ '--i': 6 }}>
          SQL
        </div>
        <div
          className='TechnologyPage-technology html/css'
          style={{ '--i': 7 }}
        >
          HTML/CSS
        </div>
        <div
          className='TechnologyPage-technology javascript'
          style={{ '--i': 8 }}
        >
          JavaScript
        </div>
        <div className='TechnologyPage-technology react' style={{ '--i': 9 }}>
          React
        </div>
        <div className='TechnologyPage-technology nodejs' style={{ '--i': 10 }}>
          NodeJS
        </div>
        <div
          className='TechnologyPage-technology typescript'
          style={{ '--i': 11 }}
        >
          Typescript
        </div>
        <div className='TechnologyPage-technology docker' style={{ '--i': 12 }}>
          Docker
        </div>
        <div className='TechnologyPage-technology aws' style={{ '--i': 13 }}>
          AWS
        </div>
        <div
          className='TechnologyPage-technology redhat-openshift'
          style={{ '--i': 14 }}
        >
          Redhat Openshift
        </div>
        <div
          className='TechnologyPage-technology jenkins'
          style={{ '--i': 15 }}
        >
          Jenkins
        </div>
      </div>
    </div>
  );
}

export default TechnologyPage;
