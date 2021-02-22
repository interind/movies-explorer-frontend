import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import cryptoKeys from '../../utils/crypto';
import './NavTab.css';

function NavTab(
  {
    links,
    place,
    handleLinkClick,
    children,
  },
) {
  return (
    <nav className='NavTab'>
      <ul className={`NavTab__items NavTab__items_place_${place}`}>
        {links.map((link) => <li key={cryptoKeys(link.path)} className={`NavTab__item NavTab__item_place_${place} ${link.active}`}>
            {link.type === 'local' ? (<NavLink className='NavTab__link' activeClassName={'NavTab__link_active'}
              to={link.path} exact title={link.title} onClick={handleLinkClick}>
              {link.text}
            </NavLink>) : (<a className='NavTab__link'
              href={link.path} title={link.title} target='_blank' rel='noopener noreferrer'>
              {link.text} {children}
            </a>)}
          </li>)}
      </ul>
    </nav>
  );
}

NavTab.propTypes = {
  place: PropTypes.string.isRequired,
  links: PropTypes.array,
  handleLinkClick: PropTypes.func,
  children: PropTypes.object,
};

export default NavTab;
