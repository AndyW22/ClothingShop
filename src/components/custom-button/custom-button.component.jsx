import React from 'react';
import './custom-button.styles.scss';

export default ({
  children,
  buttonType,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${
      inverted && 'inverted'
    } {isGoogleSignIn && 'google-sign-in'} custom-button`}
    type={buttonType}
    {...otherProps}
  >
    {children}
  </button>
);
