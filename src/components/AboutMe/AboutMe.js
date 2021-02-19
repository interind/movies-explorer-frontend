import React from 'react';
import NavTab from '../NavTab/NavTab';
import Portfolio from '../Portfolio/Portfolio';
import './AboutMe.css';

function AboutMe() {
  const title = 'О студенте';
  const student = {
    name: 'Александр',
    about: 'студент',
    age: '36 лет',
    description: 'Я родился в городе Берёзовском, живу в Москве, закончил факультет менеджмента в институте социальных и гуманитарных знаний. У меня есть жена'
    + 'сын и две дочери. Я люблю слушать музыку, а ещё увлекаюсь большим тенисом, шахматами, javascript. Недавно начал кодить. С'
    + '2006 года работаю в торговой компании и занимаюсь оптовыми продажами.  После того, как прошёл курс по'
    + 'веб-разработке, планирую перейти в сферу разработки.',
  };
  const links = [
    { path: 'https://github.com/interind', text: 'Github' },
  ];
  return (
    <section className='AboutMe' id={'about-me'}>
      <div className='AboutMe__header'>
        <h2 className='AboutMe__title'>
          {title}
        </h2>
      </div>
      <div className='AboutMe-container'>
        <div className='AboutMe-info'>
        <h3 className='AboutMe__title AboutMe__title_place_top'>{student.name}</h3>
        <h4 className='AboutMe__subtitle'>{`${student.about} ${student.age}`}</h4>
        <p className='AboutMe__text'>{student.description}</p>
        <NavTab links={links} mod={'AboutMe-item'} />
        </div>
        <div className='AboutMe-image' />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
