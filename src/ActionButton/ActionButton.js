import React from 'react';
import './ActionButton.css';

function ActionButton(props) {
  return (
    <button className = {'ActionButton_button ' + props.color}>      
        <h2 className='ActionButton_button-title'>{props.title}</h2>
        <p  className='ActionButton_button-subtitle'>{props.subtitle}</p>
    </button>
  );
}

export default ActionButton;