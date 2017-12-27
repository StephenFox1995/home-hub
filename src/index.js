import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import device from './reducers/device';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

const initialState = {
  devices: [],
};
const store = createStore(device, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'),
);
registerServiceWorker();
