import React from 'react';

import SignIn from '../../component/signin/signin-component';
import SignUp from '../../component/signup/signup.component';

import './login-component.style.scss';

const Login = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default Login;