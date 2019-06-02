import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
import styles from './styles.scss';

function ToDoList(props) {
  const { text } = props;
  return <div className="to-do-list">{text}</div>;
}

ToDoList.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ToDoList;
