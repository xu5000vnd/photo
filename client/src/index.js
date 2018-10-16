import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import Reducers from './reducers';
import axios from 'axios';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(Reducers, {}, applyMiddleware(reduxThunk));
window.axios = axios;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
