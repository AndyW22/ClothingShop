import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/users/user.action';

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

const SignIn = ({
  emailSignInStart: startEmailSignIn,
  googleSignInStart: startGoogleSignIn,
}) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };
  const { email, password } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();
    startEmailSignIn(email, password);
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCredentials({ email: '', password: '' });
        }}
      >
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton onClick={handleSubmit} buttonType="submit">
            Sign In
          </CustomButton>
          <CustomButton
            type="button"
            buttonType="button"
            onClick={startGoogleSignIn}
            isGoogleSignIn
          >
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(SignIn);
