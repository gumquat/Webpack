import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import uiReducer from './reducers/uiReducer';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
  // Specify here if you want to disable the extension in some environments
  // e.g., /* disable extension in production */
  // process.env.NODE_ENV === 'production' ? undefined : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
}) || window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
  uiReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);