import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  NotificationTypeFilters,
} from './notificationActionTypes';

const defaultState = {
  filter: NotificationTypeFilters.DEFAULT,
  notifications: [],
};

const notificationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.data.map((notification) => ({
          ...notification,
          isRead: false,
          type: notification.type.toLowerCase(), // Convert type to lowercase
        })),
      };
    case MARK_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map((notification) =>
          notification.id === action.notificationId
            ? { ...notification, isRead: true }
            : notification
        ),
      };
    case SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter.toLowerCase(), // Convert filter to lowercase
      };
    default:
      return state;
  }
};

export default notificationReducer;