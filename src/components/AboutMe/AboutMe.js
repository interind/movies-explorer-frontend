import React from 'react';
import NavTab from '../NavTab/NavTab';
import HeaderBar from '../HeaderBar/HeaderBar';
import Portfolio from '../Portfolio/Portfolio';
import './AboutMe.css';

function AboutMe() {
  const aboutMe = {
    place: 'aboutMe',
  };
  const student = {
    name: 'Александр',
    about: 'студент',
    age: '36 лет',
    description: 'Я родился в городе Берёзовском, живу в Москве, закончил факультет менеджмента в институте социальных и гуманитарных знаний. У меня есть жена '
    + 'сын и две дочери. Я люблю слушать музыку, а ещё увлекаюсь большим тенисом, шахматами, javascript. Недавно начал кодить. С'
    + ' 2006 года работаю в торговой компании и занимаюсь оптовыми продажами.  После того, как прошёл курс по'
    + ' веб-разработке, планирую перейти в сферу разработки.',
  };
  const dataLinks = [
    {
      path: 'https://github.com/interind',
      text: 'Github',
      active: '',
      title: 'ссылка на Гитхаб',
      type: 'url',
    },
    {
      path: 'https://edabit.com/user/d75pKNSh7ZJGhWMEG',
      text: 'Edabit',
      active: '',
      title: 'ссылка на Edabit',
      type: 'url',
    },
  ];
  return (
    <section className='AboutMe' id={'about-me'}>
      <HeaderBar place={aboutMe.place}>
        Студент
      </HeaderBar>
      <div className='AboutMe-container'>
        <div className='AboutMe-info'>
        <h3 className='AboutMe__title AboutMe__title_place_author'>{student.name}</h3>
        <h4 className='AboutMe__subtitle'>{`${student.about} ${student.age}`}</h4>
        <p className='AboutMe__text'>{student.description}</p>
        <NavTab links={dataLinks} place={aboutMe.place} />
        </div>
        <div className='AboutMe-image' />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
