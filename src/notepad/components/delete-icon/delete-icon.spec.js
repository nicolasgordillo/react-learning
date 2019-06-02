import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DeleteIcon from './';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    deleteNote: jest.fn(),
  };

  const wrapper = mount(<DeleteIcon {...props} />)

  return { props, wrapper };
}

describe('DeleteIcon', () => {
  const { wrapper, props } = setup();
  it('should call the deleteNote() action on click', () => {
    const aside = wrapper.find('aside');
    aside.simulate('click');
    expect(props.deleteNote).toHaveBeenCalledTimes(1);
  });
});
