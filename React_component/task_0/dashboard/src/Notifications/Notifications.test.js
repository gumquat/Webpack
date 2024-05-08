import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';


/////////////////DEAD TESTS/////////////////
////////////////////////////////////////////
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
// describe('Notifications component', () => {
//   test('renders the component when displayDrawer is true', () => {
//     const wrapper = shallow(<Notifications displayDrawer={true} />);
//     expect(wrapper.exists()).toBe(true);
//   });

//   test('does not render the component when displayDrawer is false', () => {
//     const wrapper = shallow(<Notifications displayDrawer={false} />);
//     expect(wrapper.exists()).toBe(false);
//   });
// });

describe('Notifications component', () => {
  // tests for the display drawer
  test('renders the component when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.exists()).toBe(true);
  });

  test('does not render the component when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.exists()).toBe(false);
  });

  // new tests
  test('renders correctly if listNotifications is empty or not provided', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem).exists()).toBe(true);
    expect(wrapper.find(NotificationItem).prop('value')).toBe(
      'No new notification for now'
    );
  });

  test('renders the correct number of NotificationItems when listNotifications is provided', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<p>Test HTML here</p>' } },
    ];
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={listNotifications} />
    );
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  test('does not display "Here is the list of notifications" when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(false);
  });
});
