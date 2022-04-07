import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterConfig } from './RouterConfig';

ReactDOM.render(
  <React.StrictMode>
    <link href="https://fonts.googleapis.com/earlyaccess/nicomoji.css" rel="stylesheet"></link>
    <RouterConfig></RouterConfig>
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Test></Test>
//   </React.StrictMode>,
//   document.getElementById('test')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
