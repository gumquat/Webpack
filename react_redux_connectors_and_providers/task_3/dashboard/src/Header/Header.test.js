import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Header', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    shallow(<Header isLoggedIn={false} />);
  });

  it('renders h1 tag', () => {
    const wrapper = shallow(<Header isLoggedIn={false} />);
    expect(wrapper.find('h1').exists()).toBe(true);
  });

  it('renders img tag', () => {
    const wrapper = shallow(<Header isLoggedIn={false} />);
    expect(wrapper.find('img').exists()).toBe(true);
  });

  it('does not show the logoutSection when isLoggedIn is false', () => {
    const wrapper = shallow(<Header isLoggedIn={false} />);
    expect(wrapper.find('#logoutSection').length).toBe(0);
  });

  it('shows the logoutSection when isLoggedIn is true', () => {
    const wrapper = shallow(<Header isLoggedIn={true} />);
    expect(wrapper.find('#logoutSection').length).toBe(1);
  });
});