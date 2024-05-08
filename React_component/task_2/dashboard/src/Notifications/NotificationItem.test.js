import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('renders with type and value props', () => {
    const type = "default";
    const value = "test";
    const wrapper = shallow(<NotificationItem type={type} value={value} />);
    expect(wrapper.find('li').prop('data-notification-type')).toEqual(type);
    expect(wrapper.text()).toContain(value);
  });

  it('renders with html prop', () => {
    const html = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem html={html} />);
    expect(wrapper.html()).toContain('<u>test</u>');
  });

  it('calls markAsRead with the correct ID when the notification item is clicked', () => {
    const markAsReadSpy = jest.fn();
    const notificationId = 42;
    const wrapper = shallow(<NotificationItem id={notificationId} markAsRead={markAsReadSpy} />);

    wrapper.find('li').simulate('click');

    expect(markAsReadSpy).toHaveBeenCalledWith(notificationId);
  });
});