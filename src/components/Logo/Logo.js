import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './Logo.css';

function Logo({ className }) {
  const page = { path: '/', title: 'на главную' };
  const history = useHistory();
  const pushPageStart = () => {
    history.push(page.path);
  };
  return (
    <div className={`Logo ${className ? `Logo_place_${className}` : ''}`} onClick={pushPageStart} title={page.title}/>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
