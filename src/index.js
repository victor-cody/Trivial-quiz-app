import { BrowserRouter as Router } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import { HarperDBProvider } from "use-harperdb";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <HarperDBProvider
      url={process.env.REACT_APP_INSTANCE_URL}
      user={process.env.REACT_APP_USER}
      password={process.env.REACT_APP_PASSWORD}
    >
   <Router>
      <App />
   </Router>
    </HarperDBProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
