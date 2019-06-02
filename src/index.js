// // app styles
import './variables.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Notepad from './notepad';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Notepad />
  </Provider>,
  document.getElementById('app'),
);
