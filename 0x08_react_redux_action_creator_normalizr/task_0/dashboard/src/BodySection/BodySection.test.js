import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection', () => {
  it('renders title and children correctly', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    // Check if there is one h2 element with the correct text
    expect(wrapper.find('h2').length).toEqual(1);
    expect(wrapper.find('h2').text()).toEqual('test title');

    // Check if there is one p element with the correct text
    expect(wrapper.find('p').length).toEqual(1);
    expect(wrapper.find('p').text()).toEqual('test children node');
  });
});
