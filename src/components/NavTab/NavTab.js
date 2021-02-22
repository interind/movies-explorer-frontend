import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import cryptoKeys from '../../utils/crypto';
import './NavTab.css';

function NavTab(
  {
    links,
    hidden,
    place,
    handleLinkClick,
    children,
  },
) {
  const hiddenClass = hidden ? 'NavTab_hidden' : '';
  return (
      <ul className={`NavTab NavTab_place_${place} ${hiddenClass}`}>
        {links.map((link) => <li key={cryptoKeys(link.path)} className={`NavTab__item NavTab__item_place_${place} ${link.active ? 'NavTab__item-active' : ''}`}>
            {link.type === 'local' && (<NavLink className='NavTab__link' activeStyle={{ textDecoration: 'underline', textDecorationColor: '#FF6838' }} exact
              to={link.path} title={link.title}>
              {link.text}
            </NavLink>)}
            { link.type === 'url' && (<a className='NavTab__link'
              href={link.path} title={link.title} target='_blank' rel='noopener noreferrer'>
              {link.text} {children}
            </a>)}
            {link.type === '' && (<NavLink className='NavTab__link'
              to={link.path} title={link.title} onClick={handleLinkClick}>
              {link.text}
            </NavLink>)}
          </li>)}
      </ul>
  );
}

NavTab.propTypes = {
  place: PropTypes.string.isRequired,
  links: PropTypes.array,
  handleLinkClick: PropTypes.func,
  hidden: PropTypes.bool,
  children: PropTypes.object,
};

export default NavTab;
