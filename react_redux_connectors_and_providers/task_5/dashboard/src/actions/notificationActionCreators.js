import { 
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS
} from 'notificationActionTypes';

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

// ActionCreator for setting the loading state
export function setLoadingState(loading) {
  return {
    type: SET_LOADING_STATE,
    loading
  };
}

// ActionCreator for setting notifications
export function setNotifications(data) {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data
  };
}

// ActionCreator for fetching notifications
export function fetchNotifications() {
  return (dispatch) => {
    dispatch(setLoadingState(true));
    fetch('/notifications.json')
      .then(response => response.json())
      .then(data => {
        dispatch(setNotifications(data));
        dispatch(setLoadingState(false));
      })
      .catch(error => {
        console.error('Error fetching notifications:', error);
        dispatch(setLoadingState(false));
      });
  };
}

export const bindNotificationActionCreators = (dispatch) => ({
  boundMarkAsRead: (index) => dispatch(markAsRead(index)),
  boundSetNotificationFilter: (filter) => dispatch(setNotificationFilter(filter)),
  boundFetchNotifications: () => dispatch(fetchNotifications())
});