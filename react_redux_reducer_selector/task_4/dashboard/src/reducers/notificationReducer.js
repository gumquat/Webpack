import { Map, fromJS } from 'immutable';
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  NotificationTypeFilters,
} from './notificationActionTypes';
import { notificationsNormalizer } from './notifications';

const initialState = Map({
  filter: NotificationTypeFilters.DEFAULT,
  entities: Map(),
  result: [],
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const normalizedData = notificationsNormalizer(action.data);
      return state.mergeDeep(fromJS({
        entities: normalizedData.entities,
        result: normalizedData.result,
      }));
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