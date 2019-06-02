import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import List from './';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    notes: [],
    deleteNote: jest.fn(),
  };

  const wrapper = mount(<List {...props} />)

  return { props, wrapper };
}

describe('List', () => {
  const { wrapper, props } = setup();
  it('should render correctly', () => {
    expect(wrapper.find('section').hasClass('list')).toBe(true);
  }); 
});
