import React from 'react';
import NavTab from '../NavTab/NavTab';
import HeaderBar from '../HeaderBar/HeaderBar';
import Portfolio from '../Portfolio/Portfolio';
import './AboutMe.css';

function AboutMe() {
  const title = 'О студенте';
  const mod = {
    item: 'AboutMe-item',
    items: 'AboutMe-items',
  };
  const student = {
    name: 'Александр',
    about: 'студент',
    age: '36 лет',
    description: 'Я родился в городе Берёзовском, живу в Москве, закончил факультет менеджмента в институте социальных и гуманитарных знаний. У меня есть жена'
    + 'сын и две дочери. Я люблю слушать музыку, а ещё увлекаюсь большим тенисом, шахматами, javascript. Недавно начал кодить. С'
    + ' 2006 года работаю в торговой компании и занимаюсь оптовыми продажами.  После того, как прошёл курс по'
    + 'веб-разработке, планирую перейти в сферу разработки.',
  };
  const links = [
    {
      path: 'https://github.com/interind',
      text: 'Github',
      active: '',
      title: 'ссылка на Гитхаб',
    },
    {
      path: 'https://edabit.com/user/d75pKNSh7ZJGhWMEG',
      text: 'Edabit',
      active: '',
      title: 'ссылка на Edabit',
    },
  ];
  return (
    <section className='AboutMe' id={'about-me'}>
      <HeaderBar title={title} modifier={'AboutMe__header'} />
      <div className='AboutMe-container'>
        <div className='AboutMe-info'>
        <h3 className='AboutMe__title AboutMe__title_place_top'>{student.name}</h3>
        <h4 className='AboutMe__subtitle'>{`${student.about} ${student.age}`}</h4>
        <p className='AboutMe__text'>{student.description}</p>
        <NavTab links={links} mod={mod} />
        </div>
        <div className='AboutMe-image' />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
