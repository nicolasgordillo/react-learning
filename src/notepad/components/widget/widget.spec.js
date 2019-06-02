import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Widget from './';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    addNote: jest.fn(),
    visible: true,
    notes: [],
  };

  const wrapper = mount(<Widget {...props} />)

  return { props, wrapper };
}

describe('Widget', () => {
  const { wrapper, props } = setup();
  it('should render correctly', () => {
    expect(wrapper.find('aside').hasClass('widget')).toBe(true);
  }); 
  it('should call the addNote() action on click', () => {
    const button = wrapper.find('button');
    button.simulate('click');
    expect(props.addNote).toHaveBeenCalledTimes(1);
  });
});
