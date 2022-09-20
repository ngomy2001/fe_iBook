import './App.css';
import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import AppRouter from './appRouter/Router';

function App({ Component }) {
  // 2. Use at the root of your app
  return (
    <NextUIProvider>
      <AppRouter />
    </NextUIProvider>
  );
}

export default App;
