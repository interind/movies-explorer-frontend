import React from 'react';
import cryptoKeys from '../../utils/crypto';
import arrow from '../../images/portfolio/text__COLOR_font-main.png';
import './Portfolio.css';

function Portfolio() {
  const title = 'Портфолио';
  const links = [
    { path: 'https://interind.github.io/russian-travel/index.html', text: 'Статичный сайт' },
    { path: 'https://interind.github.io/mesto/index.html', text: 'Адаптивный сайт' },
    { path: 'https://interind.students.nomoreparties.xyz', text: 'Одностраничное приложение' },
  ];
  return (
    <section className="Portfolio">
      <div className='Portfolio__header'>
      <h3 className='Portfolio__title'>{title}</h3>
      </div>
      <ul className='Portfolio-nav'>
        { links.map((link) => <li key={cryptoKeys(link.path)}
            className='Portfolio-item'>
            <a className='Portfolio-link' target='_blank' rel='noopener noreferrer' href={link.path}>
              {link.text}
              <img className='Portfolio-arrow' src={arrow} alt='стрелка'/>
            </a>
          </li>)}
      </ul>
    </section>
  );
}

export default Portfolio;
