import { Map, fromJS } from 'immutable';
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_LOADING_STATE,
  NotificationTypeFilters,
} from './notificationActionTypes';
import { notificationsNormalizer } from './notifications';

const initialState = Map({
  filter: NotificationTypeFilters.DEFAULT,
  entities: Map(),
  result: [],
  loading: false, // Add loading attribute to the initial state
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      return state.set('loading', action.loading);
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const normalizedData = notificationsNormalizer(action.data);
      return state.mergeDeep(
        fromJS({
          entities: {
            notifications: normalizedData.entities.notifications,
          },
          result: normalizedData.result,
          loading: false, // Set loading to false after successful fetch
        })
      );
    }
    case MARK_AS_READ:
      return state.setIn(['entities', 'notifications', action.notificationId, 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter.toLowerCase());
    default:
      return state;
  }
};

export default notificationReducer;