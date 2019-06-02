import { clone } from '../utils/clone';
import {
  DISPLAY_WIDGET,
  CLOSE_WIDGET,
  ADD_NOTE,
  DELETE_NOTE,
} from './actions/types';

const initialState = { 
  widgetVisible: false,
  notes: [],
};

// Functions to clone and return the next flatten state.
const nexStateWidgetVisibility = (state, payload) => {
  const next = clone(state);
  next.widgetVisible = payload;
  return next;
};

const nextStateAddedNote = (state, payload) => {
  const next = clone(state);
  next.notes = [...state.notes];
  next.notes.push(payload);
  return next;
};

const nextStateDeletedNote = (state, payload) => {
  const next = clone(state);
  next.notes = [...state.notes];
  const indexDeleted = next.notes.findIndex((note => note.id === payload));
  next.notes.splice(indexDeleted, 1);
  return next;
};

const notepadReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_WIDGET:
      return nexStateWidgetVisibility(state, action.payload);
    case CLOSE_WIDGET:
      return nexStateWidgetVisibility(state, action.payload);
    case ADD_NOTE:
      return nextStateAddedNote(state, action.payload);
    case DELETE_NOTE:
      return nextStateDeletedNote(state, action.payload);
    default:
      return state;
  }
};

export default notepadReducer;
