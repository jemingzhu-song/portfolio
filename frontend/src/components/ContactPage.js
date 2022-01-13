import React from 'react';
import './ContactPage.css';
import { UilEnvelope } from '@iconscout/react-unicons';
import { UilMapMarker } from '@iconscout/react-unicons';
import { UilMessage } from '@iconscout/react-unicons';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { borderRadius } from '@mui/system';

function ContactPage() {
  return (
    <div className='ContactPage'>
      <div className='ContactPage-personal-contact'>
        <div className='ContactPage-contact-details'>
          <div className='ContactPage-icon-section'>
            <UilEnvelope className='ContactPage-icon' />
          </div>
          <div className='ContactPage-specific-details'>
            <h2>Email</h2>
            <div>jeming.zhusong@gmail.com</div>
          </div>
        </div>
        <div className='ContactPage-contact-details'>
          <div className='ContactPage-icon-section'>
            <UilMapMarker className='ContactPage-icon' />
          </div>
          <div className='ContactPage-specific-details'>
            <h2>Location</h2>
            <div>Sydney, Australia</div>
          </div>
        </div>
      </div>
      <div className='ContactPage-form'>
        <form className='ContactPage-form-details'>
          <div className='ContactPage-input-section'>
            <label className='ContactPage-label'>Name</label>
            <input type='text' class='ContactPage-input'></input>
          </div>
          <div className='ContactPage-input-section'>
            <label className='ContactPage-label'>Email</label>
            <input type='email' class='ContactPage-input'></input>
          </div>
          <div className='ContactPage-input-section'>
            <label className='ContactPage-label'>Message</label>
            <textarea
              name=''
              id=''
              cols='0'
              rows='7'
              className='ContactPage-input'
            ></textarea>
          </div>
          <div className='ContactPage-button-section'>
            <Link to='/'>
              <Button
                variant='contained'
                sx={{ backgroundColor: 'cornflowerblue', borderRadius: '14px' }}
              >
                Send Message
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
