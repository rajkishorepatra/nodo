import React from 'react';
import ReactDOM from 'react-dom';
import { NextUIProvider } from '@nextui-org/react';
import './index.css';
// import App from './App';
import HeroPg from './pages/HeroPg'

import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <NextUIProvider>
      <Routes>
        <Route index element={<HeroPg />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </NextUIProvider>
  </BrowserRouter>,
  document.getElementById('root')
);