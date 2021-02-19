import React from 'react';
import classes from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cryptoKeys from '../../utils/crypto';
import './NavTab.css';

function NavTab({ mod, links, handleLinkClick }) {
  const classLink = classes('NavTab__item', mod);
  return (
    <nav className='NavTab'>
      <ul className='NavTab__links'>
        {links.map((link) => <li key={cryptoKeys(link.path)} className={classLink}>
            {handleLinkClick ? (<Link className='NavTab__link'
              to={link.path} onClick={handleLinkClick}>
              {link.text}
            </Link>) : (<a className='NavTab__link'
              href={link.path} target='_blank' rel='noopener noreferrer'>
              {link.text}
            </a>)}
          </li>)}
      </ul>
    </nav>
  );
}

NavTab.propTypes = {
  mod: PropTypes.string,
  links: PropTypes.array,
  handleLinkClick: PropTypes.func,
};

export default NavTab;
