import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CloseIcon from './';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    closeWidget: jest.fn(),
    visible: true,
  };

  const wrapper = mount(<CloseIcon {...props} />)

  return { props, wrapper };
}

describe('CloseIcon', () => {
  const { wrapper, props } = setup();
  it('should render correctly', () => {
    expect(wrapper.find('aside').hasClass('close-icon')).toBe(true);
  }); 
  it('should call the closeWidget() action on click', () => {
    const aside = wrapper.find('aside');
    aside.simulate('click');
    expect(props.closeWidget).toHaveBeenCalledTimes(1);
  });
});
