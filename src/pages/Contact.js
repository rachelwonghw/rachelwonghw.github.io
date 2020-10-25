import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Contact.scss';

const Contact = () => {
  return (
    <div id='contact' className='contact-background'>
      <div className='contact-card'>
        <div className='contact-info'>
          <h1>Details</h1>
          <p className='contact-paragraph'>I am always exploring different options. Reach out for jobs opportunities, collborations or anything :)</p>
          <FontAwesomeIcon icon={faLinkedin} size='3x' />
          <FontAwesomeIcon icon={faGithub} size='3x' />
        </div>

      </div>
    </div>
  )
}

export default Contact;