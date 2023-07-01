import React from 'react';
import ReactDOM from 'react-dom';
import { NextUIProvider } from '@nextui-org/react';
import './index.css';
// import App from './App';
import HeroPg from './pages/HeroPg'

import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <NextUIProvider>
      <HeroPg />
      {/* <App /> */}
    </NextUIProvider>
  </React.StrictMode>,
  document.getElementById('root')
);