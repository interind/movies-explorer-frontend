import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Button/Button';
import './NotFound.css';

function NotFound() {
  const history = useHistory();

  return (
    <div className='NotFound'>
    <h2 className='NotFound__title'>404</h2>
    <p className='NotFound__subtitle'>Страница не найдена</p>
    <Button className={'Button__goBack'} type={'button'} title={'Назад'} onChange={history.goBack}>
      Назад
    </Button>
    </div>
  );
}

export default NotFound;
