import { MARK_AS_READ, SET_TYPE_FILTER } from 'notificationActionTypes';

// ActionCreator for marking notifications as read
export function markAsRead(index) {
  return {
    type: MARK_AS_READ,
    index
  };
}

// ActionCreator for setting the notification filter
export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter
  };
}
