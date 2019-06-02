import React from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import PropTypes from 'prop-types';
import ListItem from './list-item';
import styles from './styles.scss';

function List(props) {
  let rows = props.notes.map(note => (
    // eslint-disable-next-line
    <ListItem
      key={`note_row_${note.id}`}
      id={note.id}
      text={note.text}
      validations={note.validations}
      deleteNote={props.deleteNote}
    />
  ));

  if (rows.length === 0) {
    rows = [
      <ListItem key="default" text="No notes yet..." validations={[]} />,
    ];
  }

  return (
    <section className="list">
      <h1>Your notes</h1>
      <div className="list__row">
        <hr />
      </div>
      <TransitionGroup appear>
        {rows}
      </TransitionGroup>
    </section >
  );
}

List.propTypes = {
  notes: PropTypes.array.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default List;
