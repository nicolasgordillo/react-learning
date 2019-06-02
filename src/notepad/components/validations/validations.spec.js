import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Validations from './';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    validations: [],
  };

  const wrapper = mount(<Validations {...props} />)

  return { props, wrapper };
}

describe('Validations', () => {
  const { wrapper, props } = setup();
  it('should render correctly', () => {
    expect(wrapper.find('ul').hasClass('validations__list')).toBe(true);
  });
});
