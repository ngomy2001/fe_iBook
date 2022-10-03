import { Input } from '@nextui-org/react';
import { Checkbox } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { FaGoogle } from 'react-icons/fa';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

/* import service */
import { login } from '../../api/authAPI';

import '../loginPage/LoginPage.css';
const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    try {
      const { email, password } = data;
      const payload = {
        email,
        password,
      };
      const response = await login(payload);
      const token = response.data.token;
      if (!token) return;
      localStorage.setItem('access_token', token);
      navigate('/');
    } catch (error) {
      setError('Something went wrong, please try again or contact us');
    }
  };
  return (
    <div className="Login-page">
      <div className="Login-leftside">
        <div className="Login-headline">
          <p className="Login-headline-title">Welcome back</p>
          <p className="Login-headline-subtitle">
            Welcome back! Please enter your details.
          </p>
        </div>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="Email-form">
            <label>Email</label>
            <Input
              placeholder="Enter your email"
              css={{
                boxSizing: 'border - box',
                width: '313.97px',
                height: '41.31px',
                border: '1px solid rgba(0, 0, 0, 0.25)',
                borderRadius: '12px',
              }}
              {...register('email', { required: true })}
            />
          </div>
          <div className="Password-form">
            <label>Password</label>
            <Input
              placeholder="Enter your password"
              css={{
                boxSizing: 'border - box',
                width: '313.97px',
                height: '41.31px',
                border: '1px solid rgba(0, 0, 0, 0.25)',
                borderRadius: '12px',
              }}
              {...register('password')}
            />
          </div>
          <div className="Option-form">
            <Checkbox defaultSelected={true}>
              <p>Remember me</p>
            </Checkbox>
            <a>Forgot password</a>
          </div>
          <div className="Btn-block">
            <Button className="Btn-sign-in" type="submit">
              Sign in
            </Button>
            <Button className="Btn-sign-in-google">
              <FaGoogle />
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
