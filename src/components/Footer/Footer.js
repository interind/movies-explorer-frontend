import React from 'react';
import './Footer.css';
import NavTab from '../NavTab/NavTab';

function Footer() {
  const footer = {
    title: 'Учебный проект Яндекс.Практикум х BeatFilm.',
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
      <div className='Footer__header'>
        <h2 className='Footer__title'>{footer.title}</h2>
      </div>
      <div className='Footer__footer'>
        <p className='Footer-item'>
          &copy;{new Date().getFullYear()}
        </p>
        <NavTab links={dataLinks} place={footer.place}/>
      </div>
    </footer>
  );
}

export default Footer;
