import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import './Main.css';

function Main({ onHeader }) {
  useEffect(() => {
    onHeader(true);
  });
  return (
    <main className='Main'>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
    </main>
  );
}

Main.propTypes = {
  onHeader: PropTypes.func.isRequired,
};

export default Main;
