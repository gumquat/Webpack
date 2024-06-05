import { createSelector } from 'reselect';

// Selector for the filter
const filterTypeSelected = state => state.notifications.get('filter');
// Selector for all notifications
const getNotifications = state =>
  state.notifications.get('entities').get('notifications');
// Selector for unread notifications
const getUnreadNotifications = createSelector(
  getNotifications,
  notifications =>
    notifications.filter(notification => !notification.get('isRead'))
);

export {filterTypeSelected, getNotifications, getUnreadNotifications};