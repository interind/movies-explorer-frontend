import React from 'react';
import PropTypes from 'prop-types';
import './InfoTool.css';

function InfoTool({ data }) {
  const { message = '', type = '', visible } = data;
  return (
    <React.Fragment>
      {visible && <div className='InfoTool'>
        {!type ? <h2 className='InfoTool__title InfoTool__title_theme_red'>{message}</h2>
          : <h2 className='InfoTool__title InfoTool__title_theme_green'>{message}</h2>}
      </div>}
    </React.Fragment>
  );
}

InfoTool.propTypes = {
  data: PropTypes.object,
};

export default InfoTool;
