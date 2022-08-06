import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import RegisterPage from './pages/RegisterPage';

function App({ Component }) {
  // 2. Use at the root of your app
  return (
    <NextUIProvider>
      <RegisterPage />
    </NextUIProvider>
  );
}

export default App;
