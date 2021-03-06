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
    onChange,
  },
) {
  return (
      <ul className={`NavTab NavTab_place_${place || 'hidden'}`}>
        {links.map((link) => <li key={cryptoKeys(link.path)} onClick={onChange} className={`NavTab__item NavTab__item_place_${place} ${link.active ? 'NavTab__item-active' : ''}`}>
            {link.type === 'local' && (<NavLink className='NavTab__link' activeClassName={`${link.active ? '' : 'NavTab__link_active'}`} exact
              to={link.path} title={link.title}>
              {link.text} {children && children}
            </NavLink>)}
            { link.type === 'url' && (<a className='NavTab__link'
              href={link.path} title={link.title} target='_blank' rel='noopener noreferrer'>
              {link.text} {children && children}
            </a>)}
            {link.type === '' && (<NavLink className='NavTab__link'
              to={link.path} title={link.title} onClick={handleLinkClick}>
              {link.text} {children && children}
            </NavLink>)}
          </li>)}
      </ul>
  );
}

NavTab.propTypes = {
  place: PropTypes.string,
  links: PropTypes.array,
  handleLinkClick: PropTypes.func,
  hidden: PropTypes.bool,
  children: PropTypes.object,
  onChange: PropTypes.func,
};

export default NavTab;
