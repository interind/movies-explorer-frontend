import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Promo from '../Promo/Promo';
import Button from '../Button/Button';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import './Main.css';

function Main({ onHeader, stateHeader }) {
  useEffect(() => {
    if (!stateHeader) {
      onHeader(true);
    }
  }, [onHeader, stateHeader]);
  return (
    <main className='Main'>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Button className='Button__app' type='button' title='Вверх' onChange={() => window.scrollTo(0, 0)}/>
    </main>
  );
}

Main.propTypes = {
  onHeader: PropTypes.func.isRequired,
  stateHeader: PropTypes.bool.isRequired,
};

export default Main;
