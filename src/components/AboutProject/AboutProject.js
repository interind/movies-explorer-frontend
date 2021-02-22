import React from 'react';
import './AboutProject.css';
import HeaderBar from '../HeaderBar/HeaderBar';

function AboutProject() {
  const aboutProject = {
    title: 'О проекте',
    place: 'aboutProject',
  };
  return (
    <section className='AboutProject' id={'about-project'}>
      <HeaderBar modifier={aboutProject} />
      <div className='AboutProject__containers'>
        <div className='AboutProject__container'>
          <h3 className='AboutProject__title AboutProject__title_size_m'>Дипломный проект включал 5 этапов</h3>
          <p className='AboutProject__title AboutProject__title_theme_s'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='AboutProject__container'>
          <h3 className='AboutProject__title AboutProject__title_size_m'>На выполнение диплома ушло 5 недель</h3>
          <p className='AboutProject__title AboutProject__title_theme_s'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='AboutProject__containers'>
        <div className='AboutProject__container AboutProject__container_size_m'>
          <h3 className='AboutProject__title AboutProject__title_theme_green'>1 неделя</h3>
          <p className='AboutProject__title AboutProject__title_theme_white'>Back-end</p>
        </div>
        <div className='AboutProject__container AboutProject__container_size_x'>
          <h3 className='AboutProject__title AboutProject__title_theme_gray'>4 недели</h3>
          <p className='AboutProject__title AboutProject__title_theme_white'>Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
