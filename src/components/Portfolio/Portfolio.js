import React from 'react';
import cryptoKeys from '../../utils/crypto';
import './Portfolio.css';

function Portfolio() {
  const title = 'Портфолио';
  const links = [
    {
      path: 'https://interind.github.io/russian-travel/index.html',
      text: 'Статичный сайт',
      title: 'ссылка на сайт russian-travel',
      active: '',
    },
    {
      path: 'https://interind.github.io/mesto/index.html',
      text: 'Адаптивный сайт',
      title: 'ссылка на сайт mesto',
      active: '',
    },
    {
      path: 'https://interind.students.nomoreparties.xyz',
      text: 'Одностраничное приложение',
      title: 'ссылка на сайт mesto-react',
      active: '',
    },
  ];
  return (
    <section className="Portfolio">
      <div className='Portfolio__header'>
      <h3 className='Portfolio__title'>{title}</h3>
      </div>
      <ul className='Portfolio-nav'>
        { links.map((link) => <li key={cryptoKeys(link.path)}
            className='Portfolio-item'>
            <a className='Portfolio-link' title={link.title} target='_blank' rel='noopener noreferrer' href={link.path}>
              {link.text}
              <span className='Portfolio-arrow'/>
            </a>
          </li>)}
      </ul>
    </section>
  );
}

export default Portfolio;
