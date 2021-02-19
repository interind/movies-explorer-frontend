import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import './Main.css';
import Techs from '../Techs/Techs';

function Main() {
  return (
    <React.Fragment>
    <Promo />
    <AboutProject />
    <Techs />
    <div>
      Techs — компонент с использованными технологиями.
      AboutMe — компонент с информацией о студенте.
      Portfolio — компонент со ссылками на другие проекты.
    </div>
    </React.Fragment>
  );
}

export default Main;
