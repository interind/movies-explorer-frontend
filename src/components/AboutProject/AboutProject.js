import React from 'react';
import './AboutProject.css';

function AboutProject() {
  const title = 'О проекте';
  return (
    <section className='AboutProject' id={'about-project'}>
      <div className='AboutProject__header'>
        <h2 className='AboutProject__title'>
          {title}
        </h2>
      </div>
      <div className='AboutProject__containers'>
        <div className='AboutProject__container'>
          <h3 className='AboutProject__title AboutProject__title_size_m'>Дипломный проект включал 5 этапов</h3>
          <p className='AboutProject__container-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='AboutProject__container'>
          <h3 className='AboutProject__title AboutProject__title_size_m'>На выполнение диплома ушло 5 недель</h3>
          <p className='AboutProject__container-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
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
