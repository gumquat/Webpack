import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

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

  // New test to check markAsRead function
  test('calls markAsRead function with the correct notification ID', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={listNotifications} />
    );

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    const firstNotificationItem = wrapper.find(NotificationItem).first();
    firstNotificationItem.props().markAsRead(1);

    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');

    consoleSpy.mockRestore();
  });

  // New tests for rerendering based on listNotifications prop changes
  test('does not rerender when updating props with the same listNotifications', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={listNotifications} />
    );

    const shouldComponentUpdateSpy = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');

    wrapper.setProps({ displayDrawer: true, listNotifications: [...listNotifications] });

    expect(shouldComponentUpdateSpy).toHaveBeenCalledTimes(1);
    expect(shouldComponentUpdateSpy).toHaveLastReturnedWith(false);

    shouldComponentUpdateSpy.mockRestore();
  });

  test('rerenders when updating props with a longer listNotifications', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={listNotifications} />
    );

    const shouldComponentUpdateSpy = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');

    const longerListNotifications = [
      ...listNotifications,
      { id: 3, type: 'urgent', value: 'New notification' },
    ];

    wrapper.setProps({ displayDrawer: true, listNotifications: longerListNotifications });

    expect(shouldComponentUpdateSpy).toHaveBeenCalledTimes(1);
    expect(shouldComponentUpdateSpy).toHaveLastReturnedWith(true);

    shouldComponentUpdateSpy.mockRestore();
  });
});
