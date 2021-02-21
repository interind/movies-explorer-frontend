import React from 'react';
import classes from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cryptoKeys from '../../utils/crypto';
import './NavTab.css';

function NavTab({ mod, links, handleLinkClick }) {
  const classItem = classes('NavTab__item', mod.item);
  const classLinks = classes('NavTab__links', mod.items);
  return (
    <nav className='NavTab'>
      <ul className={classLinks}>
        {links.map((link) => <li key={cryptoKeys(link.path)} className={`${classItem} ${link.active}`}>
            {handleLinkClick ? (<Link className='NavTab__link'
              to={link.path} title={link.title} onClick={handleLinkClick}>
              {link.text}
            </Link>) : (<a className='NavTab__link'
              href={link.path} title={link.title} target='_blank' rel='noopener noreferrer'>
              {link.text}
            </a>)}
          </li>)}
      </ul>
    </nav>
  );
}

NavTab.propTypes = {
  mod: PropTypes.object,
  links: PropTypes.array,
  handleLinkClick: PropTypes.func,
};

export default NavTab;
