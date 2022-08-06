import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import LoginPage from './components/loginPage/LoginPage';

function App({ Component }) {
  // 2. Use at the root of your app
  return (
    <NextUIProvider>
      <LoginPage />
    </NextUIProvider>
  );
}

export default App;
