import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

var history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App/>
  </Router>
 ,document.getElementById('root')
);

// hot module reloading used to reload app in browser w/out performing a page
// refresh. Useful when wanting to test w/out losing console.log() s
if (module.hot) {
  module.hot.accept()
}

serviceWorker.unregister();
