import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './InfoTool.css';

function InfoTool({ data, infoMessage }) {
  const { message = '', type = '' } = data;
  useEffect(() => {
    setTimeout(() => {
      infoMessage('', true, false);
    }, 5000);
  }, [infoMessage]);
  return (
    <React.Fragment>
      <div className='InfoTool'>
        {!type ? <h2 className='InfoTool__title InfoTool__title_theme_red'>{message}</h2>
          : <h2 className='InfoTool__title InfoTool__title_theme_green'>{message}</h2>}
      </div>
    </React.Fragment>
  );
}

InfoTool.propTypes = {
  data: PropTypes.object,
  infoMessage: PropTypes.func.isRequired,
};

export default InfoTool;
