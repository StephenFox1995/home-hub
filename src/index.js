import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TempContainer from './containers/TempContainer';
import temp from './reducers/temp';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(temp);

ReactDOM.render(
  <Provider store={store}>
    <TempContainer />
  </Provider>
  , document.getElementById('root'),
);
registerServiceWorker();
