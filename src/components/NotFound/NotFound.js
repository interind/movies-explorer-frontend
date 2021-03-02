import React from 'react';
import NavTab from '../NavTab/NavTab';
import './NotFound.css';

function NotFound() {
  const link = [{
    path: '/',
    text: 'Главная страница',
    active: '',
    title: 'Перейти на главную страницу',
    type: 'local',
  }];
  return (
    <div className='NotFound'>
    <h2>404 ошибка</h2>
    <NavTab links={link} place={'page'}/>
    </div>
  );
}

export default NotFound;
