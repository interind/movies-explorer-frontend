import React from 'react';
import './Footer.css';
import NavTab from '../NavTab/NavTab';
import HeaderBar from '../HeaderBar/HeaderBar';

function Footer() {
  const footer = {
    place: 'footer',
  };
  const dataLinks = [
    {
      path: 'https://praktikum.yandex.ru/',
      text: 'Яндекс.Практикум',
      title: 'ссылка на сайт Яндекс.Практикум',
      active: '',
      type: 'url',
    },
    {
      path: 'https://github.com/',
      text: 'Github',
      title: 'ссылка на сайт Github',
      active: '',
      type: 'url',
    },
    {
      path: 'https://ru-ru.facebook.com/',
      text: 'Facebook',
      title: 'ссылка на сайт Facebook',
      active: '',
      type: 'url',
    },
  ];
  return (
    <footer className='Footer'>
      <HeaderBar place={footer.place}>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </HeaderBar>
      <div className='Footer__container'>
        <span className='Footer-item'>
          &copy; {new Date().getFullYear()}
        </span>
        <NavTab links={dataLinks} place={footer.place}/>
      </div>
    </footer>
  );
}

export default Footer;
