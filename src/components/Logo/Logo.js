import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './Logo.css';

function Logo({ element }) {
  const history = useHistory();
  const pushPageStart = () => {
    history.push(element.path);
  };
  return (
    <div className='Logo' onClick={pushPageStart} title={element.title}/>
  );
}

Logo.propTypes = {
  element: PropTypes.object,
};

export default Logo;
