import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom', () => {
  it('renders BodySection component with correct props', () => {
    const title = 'Test Title';
    const children = <p>Test Children</p>;
    const wrapper = shallow(
      <BodySectionWithMarginBottom title={title}>
        {children}
      </BodySectionWithMarginBottom>
    );

    // Check if BodySection component is rendered
    expect(wrapper.find(BodySection).exists()).toBeTruthy();

    // Check if props are passed correctly to the BodySection component
    expect(wrapper.find(BodySection).prop('title')).toEqual(title);
    expect(wrapper.find(BodySection).contains(children)).toBeTruthy();
  });
});
