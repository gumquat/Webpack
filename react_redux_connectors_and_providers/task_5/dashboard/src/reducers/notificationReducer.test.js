import notificationReducer from './notificationReducer';
import { Map, fromJS } from 'immutable';
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_LOADING_STATE,
  NotificationTypeFilters,
} from './notificationActionTypes';

describe('notificationReducer', () => {
  it('should return the default state when no action is passed', () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(
      Map({
        filter: NotificationTypeFilters.DEFAULT,
        entities: Map(),
        result: [],
        loading: false,
      })
    );
  });

  // ... (existing tests)

  it('should update the loading state when SET_LOADING_STATE action is passed', () => {
    const initialState = fromJS({
      filter: NotificationTypeFilters.DEFAULT,
      entities: {},
      result: [],
      loading: false,
    });
    const state = notificationReducer(initialState, { type: SET_LOADING_STATE, loading: true });
    const expectedState = fromJS({
      filter: NotificationTypeFilters.DEFAULT,
      entities: {},
      result: [],
      loading: true,
    });
    expect(state).toEqual(expectedState);
  });
});