import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LaunchIcon from './';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    displayWidget: jest.fn(),
    visible: true,
  };

  const wrapper = mount(<LaunchIcon {...props} />)

  return { props, wrapper };
}

describe('LaunchIcon', () => {
  const { wrapper, props } = setup();
  it('should render correctly', () => {
    expect(wrapper.find('aside').hasClass('launch-icon')).toBe(true);
  }); 
  it('should call the displayWidget() action on click', () => {
    const aside = wrapper.find('aside');
    aside.simulate('click');
    expect(props.displayWidget).toHaveBeenCalledTimes(1);
  });
});
