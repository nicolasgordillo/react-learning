// // app styles
import React from 'react';
import ReactDOM from 'react-dom';
import './variables.scss';
import ToDoList from './components/to-do-list';

ReactDOM.render(
  // eslint-disable-next-line no-undef
  <ToDoList text="This is supposed to be the todo list" />, document.getElementById('app'),
);
