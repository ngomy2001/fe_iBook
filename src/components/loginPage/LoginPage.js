import { Input } from '@nextui-org/react';
import { Checkbox } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { FaGoogle } from 'react-icons/fa';
import { Image } from '@nextui-org/react';

import '../loginPage/LoginPage.css';
const LoginPage = () => {
  return (
    <div className="Login-page">
      <div className="Login-leftside">
        <div className="Login-headline">
          <p className="Login-headline-title">Welcome back</p>
          <p className="Login-headline-subtitle">
            Welcome back! Please enter your details.
          </p>
        </div>
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
          />
        </div>
        <div className="Option-form">
          <Checkbox defaultSelected={true}>
            <p>Remember me</p>
          </Checkbox>
          <a>Forgot password</a>
        </div>
        <div className="Btn-block">
          <Button className="Btn-sign-in">Sign in</Button>
          <Button className="Btn-sign-in-google">
            <FaGoogle />
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
