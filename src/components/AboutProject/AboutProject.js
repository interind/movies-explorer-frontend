import React from 'react';
import HeaderBar from '../HeaderBar/HeaderBar';
import cryptoKeys from '../../utils/crypto';
import './AboutProject.css';

function AboutProject() {
  const aboutProject = {
    title: 'О проекте',
    place: 'aboutProject',
  };
  const dataInfo = [
    {
      title: 'Дипломный проект включал 5 этапов',
      description: 'Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.',
    },
    {
      title: 'На выполнение диплома ушло 5 недель',
      description: 'У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.',
    },
  ];
  const timeInfo = [
    {
      title: '1 неделя',
      description: 'Back-end',
    },
    {
      title: '4 недели',
      description: 'Front-end',
    },
  ];
  return (
    <section className='AboutProject' id={'about-project'}>
      <HeaderBar modifier={aboutProject} />
      { dataInfo.map((info) => <div key={cryptoKeys(info.title)} className='AboutProject__container'>
          <h3 className='AboutProject__title'>{info.title}</h3>
          <p className='AboutProject__subtitle'>{info.description}</p>
      </div>)}
      { timeInfo.map((info) => <div key={cryptoKeys(info.title)} className='AboutProject__container'>
          <h3 className={`AboutProject__title AboutProject__title_theme_${info.title.includes('1') ? 'green' : 'gray'}`}>{info.title}</h3>
          <p className='AboutProject__subtitle AboutProject__subtitle_theme_gray'>{info.description}</p>
      </div>)}
    </section>
  );
}

export default AboutProject;
