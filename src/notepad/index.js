import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import List from './components/list';
import Widget from './components/widget';
import LaunchIcon from './components/launch-icon';
import CloseIcon from './components/close-icon';
import actions from './actions';
import styles from './styles.scss';

function Notepad(props) {
  const { addNote, displayWidget, closeWidget, deleteNote } = props;
  return (
    <section className="notepad">
      <List notes={props.notes} deleteNote={deleteNote} />
      <Widget addNote={addNote} visible={props.widgetVisible} notes={props.notes} deleteNote={deleteNote} />
      <LaunchIcon displayWidget={displayWidget} visible={!props.widgetVisible} />
      <CloseIcon closeWidget={closeWidget} visible={props.widgetVisible} />
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    widgetVisible: state.widgetVisible,
    notes: state.notes,
  };
};

Notepad.propTypes = {
  addNote: PropTypes.func.isRequired,
  displayWidget: PropTypes.func.isRequired,
  closeWidget: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
  notes: PropTypes.array.isRequired,
  widgetVisible: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, actions)(Notepad);

