import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterConfig } from './RouterConfig';
// Import the functions you need from the SDKs you need

ReactDOM.render(
  <React.StrictMode>
    <link href="https://fonts.googleapis.com/earlyaccess/nicomoji.css" rel="stylesheet"></link>
    <RouterConfig></RouterConfig>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
