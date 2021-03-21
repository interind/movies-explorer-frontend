import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './InfoTool.css';

function InfoTool({ data, toggleEventListenerWindowClick }) {
  const { message = '', type = '', visible } = data;
  const [status, setStatus] = useState(visible);
  useEffect(() => {
    if (visible) {
      toggleEventListenerWindowClick(true);
      setStatus(visible);
    }
    return () => {
      toggleEventListenerWindowClick(false);
      setTimeout(() => {
        setStatus(!visible);
      }, 3000);
    };
  }, [visible, toggleEventListenerWindowClick]);
  return (
    <React.Fragment>
      {status && <div className='InfoTool'>
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
