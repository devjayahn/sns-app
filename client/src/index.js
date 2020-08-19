import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import promiseMiddlerware from "redux-promise";
import reduxThunk from "redux-thunk";
import reducer from "./reducers/reducers"

const createStoreWidthMiddleware = applyMiddleware(
  promiseMiddlerware,
  reduxThunk
)(createStore);

ReactDOM.render(
  <React.StrictMode>    
    <Provider
      store={createStoreWidthMiddleware(
        reducer,        
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )}>
  <BrowserRouter>
    <App />    
  </BrowserRouter>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
