import React from 'react';
import './custom-button.styles.scss';

export default ({ children, buttonType, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn && 'google-sign-in'} custom-button`}
    type={buttonType}
    {...otherProps}
  >
    {children}
  </button>
);
