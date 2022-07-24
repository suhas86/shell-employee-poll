import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import middleware from './middleware';
import reducer from './reducers';
import { BrowserRouter } from 'react-router-dom';

export const store = createStore(reducer, middleware);

const root = ReactDOM.createRoot(
  document.getElementById('root') || document.createElement('div') // for testing purposes
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
