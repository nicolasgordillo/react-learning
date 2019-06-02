import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WidgetListItem from './';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    note: {
      id: '123',
      text: 'hello',
      validations: [],
    },
    deleteNote: jest.fn(),
  };

  const wrapper = mount(<WidgetListItem {...props} />);

  return { props, wrapper };
}

describe('WidgetListItem', () => {
  const { wrapper, props } = setup();
  it('should render correctly', () => {
    expect(wrapper.find('div').first().hasClass('list__row')).toBe(true);
  });
});
