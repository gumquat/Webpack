import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />, { context: {} });
  });

  test('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('renders three NotificationItem elements', () => {
    expect(wrapper.find('NotificationItem')).toHaveLength(3);
  });

  test('renders the text "Here is the list of notifications"', () => {
    expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
  });

  test('first NotificationItem element renders the right html', () => {
    const firstNotificationItem = wrapper.find('NotificationItem').first();
    expect(firstNotificationItem.prop('data-priority')).toBe('default');
    expect(firstNotificationItem.text()).toBe('New course available');
  });
});