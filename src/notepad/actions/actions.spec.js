import actions from './';
import {
  DISPLAY_WIDGET,
  CLOSE_WIDGET,
  DELETE_NOTE,
} from './types';

describe('actions', () => {
  it('should create an action to display the widget', () => {
    const expectedAction = {
      type: DISPLAY_WIDGET,
      payload: true,
    };
    expect(actions.displayWidget()).toEqual(expectedAction);
  })
  it('should create an action to close the widget', () => {
    const expectedAction = {
      type: CLOSE_WIDGET,
      payload: false,
    };
    expect(actions.closeWidget()).toEqual(expectedAction);
  })
  it('should create an action to delete a note', () => {
    const id = 123;
    const expectedAction = {
      type: DELETE_NOTE,
      payload: id,
    };
    expect(actions.deleteNote(123)).toEqual(expectedAction);
  })
})