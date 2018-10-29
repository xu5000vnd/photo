import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import ReactGA from 'react-ga';
import Reducers from './reducers';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactGA.initialize('UA-76352480-1');
ReactGA.pageview(window.location.pathname + window.location.search);

window.siteName = 'Quần Què';
window.meta = {};
window.meta.keywords = document.querySelector('meta[name=keywords]');
window.meta.description = document.querySelector('meta[name=description]');

const store = createStore(Reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
