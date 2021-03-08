import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './InfoTool.css';

function InfoTool({ data, toggleEventListenerWindowClick }) {
  const { message = '', type = '', visible } = data;
  useEffect(() => {
    if (visible) {
      toggleEventListenerWindowClick(true);
    }
    return () => {
      toggleEventListenerWindowClick(false);
    };
  }, [visible, toggleEventListenerWindowClick]);
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
  data: PropTypes.object.isRequired,
  toggleEventListenerWindowClick: PropTypes.func.isRequired,
};

export default InfoTool;
