import reducer from './reducer'
import {
  DISPLAY_WIDGET,
  CLOSE_WIDGET,
  ADD_NOTE,
  DELETE_NOTE,
} from './actions/types';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      notes: [],
      widgetVisible: false,
    },
    );
  });
  it('should handle DISPLAY_WIDGET', () => {
    expect(
      reducer([], {
        type: DISPLAY_WIDGET,
        payload: true,
      }),
    ).toEqual(
      { widgetVisible: true },
    );
  });
  it('should handle CLOSE_WIDGET', () => {
    expect(
      reducer([], {
        type: CLOSE_WIDGET,
        payload: false,
      }),
    ).toEqual(
      { widgetVisible: false },
    );
  });
  it('should handle ADD_NOTE', () => {
    const mockedPreviousState = {
      notes: [],
      widgetVisible: true,
    };
    expect(
      reducer(mockedPreviousState, {
        type: ADD_NOTE,
        payload: {
          id: 123,
          text: 'hello',
        }
      }),
    ).toEqual({
      notes: [{ id: 123, text: 'hello'}], 
      widgetVisible: true,
    });
  });
  it('should handle DELETE_NOTE', () => {
    const mockedPreviousState = {
      notes: [{ id: 123, text: 'hello' }],
      widgetVisible: true,
    };
    expect(
      reducer(mockedPreviousState, {
        type: DELETE_NOTE,
        id: 123,
      }),
    ).toEqual({
      notes: [],
      widgetVisible: true,
    },
    );
  });
});
