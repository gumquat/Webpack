import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

// describe('Notifications component', () => {
  // let wrapper;

  // beforeEach(() => {
  //   wrapper = shallow(<Notifications />, { context: {} });
  // });

  // test('renders without crashing', () => {
  //   expect(wrapper.exists()).toBe(true);
  // });

  // test('renders three list items', () => {
  //   expect(wrapper.find('ul').children()).toHaveLength(3);
  // });

  // test('renders the text "Here is the list of notifications"', () => {
  //   expect(wrapper.find('p').text()).toBe('Here is the list of notifications');

  // tests for the display drawer
describe('Notifications component', () => {
  test('renders the component when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.exists()).toBe(true);
  });

  test('does not render the component when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.exists()).toBe(false);
  });
  });