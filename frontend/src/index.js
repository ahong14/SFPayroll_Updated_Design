import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import App from './components/App';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
//redux setup
//reference: https://github.com/rt2zz/redux-persist
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

//creating redux store
//redux persist configuration
const persistConfig = {
  key: 'root',
  storage
}

//root reducer, stores state of other reducers
const persistedReducer = persistReducer(persistConfig, rootReducer);
//create redux store with redux dev tools enabled
const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const persistor = persistStore(store);

var history = createBrowserHistory();

//persist gate - delays rendering of UI components until persisted state has been retrieved
//reference: https://blog.reactnativecoach.com/the-definitive-guide-to-redux-persist-84738167975

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <App/>
      </Router>
    </PersistGate>
  </Provider>
 ,document.getElementById('root')
);