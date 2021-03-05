import React from 'react';
import PropTypes from 'prop-types';
import './InfoTool.css';

function InfoTool({ data }) {
  const { message = 'Неизвестная ошибка', type = '' } = data;
  return (
    <React.Fragment>
      <div className='InfoTool'>
        {!type ? <h2 className='InfoTool__title InfoTool__title_theme_red'>{message}</h2>
          : <h2 className='InfoTool__title .InfoTool__title_theme_green'>{message}</h2>}
      </div>
    </React.Fragment>
  );
}

InfoTool.propTypes = {
  data: PropTypes.object,
  message: PropTypes.string,
};

export default InfoTool;
