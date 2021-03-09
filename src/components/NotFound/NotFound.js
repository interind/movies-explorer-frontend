import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './NotFound.css';

function NotFound({ onHeader, stateHeader }) {
  const history = useHistory();
  useEffect(() => {
    if (stateHeader) {
      onHeader(false);
    }
  }, [onHeader, stateHeader]);
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

NotFound.propTypes = {
  onHeader: PropTypes.func.isRequired,
  stateHeader: PropTypes.bool.isRequired,
};

export default NotFound;
