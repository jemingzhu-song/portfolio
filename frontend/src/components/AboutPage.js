import React from 'react';

import { UilGithubAlt } from '@iconscout/react-unicons';
import { UilLinkedinAlt } from '@iconscout/react-unicons';
import './AboutPage.css';

import ProfilePicture from '../images/profile-picture.png';
import PersonalPhoto from '../images/personal-photo.jpg';

function AboutPage() {
  return (
    <div className='AboutPage'>
      <div className='AboutPage-summary'>
        <div className='AboutPage-summary-text'>
          <h1>
            Hey there, <br></br> I'm Jeming
          </h1>
          <br></br>
          <h2>
            👨‍🎓 Student at the <br></br> University of New South Wales
          </h2>
          <br></br>
          <p>
            📈 B Commerce (Finance) <br></br>
            <br></br>
            💻 B Science (Computer Science)
          </p>
        </div>
        <div className='AboutPage-summary-box'>
          <img
            className='AboutPage-profile-picture-image'
            src={ProfilePicture}
            alt='Me!'
          />
          <div className='AboutPage-summary-box-links'>
            <a
              href='https://www.linkedin.com/in/jeming-zhu-song-181119178/'
              className='AboutPage-social-icon'
            >
              <UilLinkedinAlt />
            </a>
            <a
              href='https://github.com/jemingzhu-song'
              className='AboutPage-social-icon'
            >
              <UilGithubAlt />
            </a>
          </div>
        </div>
      </div>
      <div className='AboutPage-detail'>
        <div className='AboutPage-detail-photo'>
          <img
            className='AboutPage-detail-personal-photo'
            src={PersonalPhoto}
            alt='Me!'
          ></img>
        </div>
        <div className='AboutPage-detail-text'>
          <p>
            Hey there, I am currently a student at the University of New South
            Wales (UNSW) studying a Bachelors of Commerce (majoring in Finance)
            and a Bachelors of Science (majoring in Computer Science). <br></br>
            <br></br> I am passionate about the different ways technology can
            help improve business processes and how I can combine my Commerce &
            Computer Science knowledge to generate innovative and holistic
            solutions for real world clients. <br></br>
            <br></br>
            In my free time, I enjoy playing basketball, going to the gym 🏋️‍♂️,
            playing chess 🧩, designing websites 🖌, and cooking various cuisines
            🍳, especially Italian! 🍝
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
