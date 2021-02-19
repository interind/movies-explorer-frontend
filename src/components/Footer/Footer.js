import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='Footer'>
      <p className='Footer__copyright'>
        &copy;{new Date().getFullYear()} Diploma
      </p>
    </footer>
  );
}

export default Footer;
