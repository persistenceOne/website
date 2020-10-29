import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store";
import {unregister} from './registerServiceWorker'


const app = (
    <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>
);



ReactDOM.render(app, document.getElementById('root'));
unregister();