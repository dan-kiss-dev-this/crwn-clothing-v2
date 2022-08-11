import React from 'react';
import './button.styles.scss';
// we know we have 3 buttons, default, inverted colors and google login button

const BUTTON_TYPE_CLASSES = { google: 'google-sign-in', inverted: 'inverted' };
const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
