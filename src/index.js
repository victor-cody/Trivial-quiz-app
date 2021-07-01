import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import {useHistory} from 'react-router-dom';
import { HarperDBProvider } from "use-harperdb";
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth0Provider>
        <HarperDBProvider
          url={process.env.REACT_APP_INSTANCE_URL}
          user={process.env.REACT_APP_USER}
          password={process.env.REACT_APP_PASSWORD}
        >
          <App />
        </HarperDBProvider>
      </Auth0Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
