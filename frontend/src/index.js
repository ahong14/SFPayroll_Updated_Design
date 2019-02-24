import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// hot module reloading used to reload app in browser w/out performing a page
// refresh. Useful when wanting to test w/out losing console.log() s
if (module.hot) {
  module.hot.accept()
}

serviceWorker.unregister();
