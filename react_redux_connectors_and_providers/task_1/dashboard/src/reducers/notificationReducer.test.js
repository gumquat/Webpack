import notificationReducer from './notificationReducer';
import { Map, fromJS } from 'immutable';
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
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
      })
    );
  });

  it('should return the normalized data when FETCH_NOTIFICATIONS_SUCCESS action is passed', () => {
    const notifications = [
      { id: 1, type: 'info', message: 'This is an info notification' },
      { id: 2, type: 'warning', message: 'This is a warning notification' },
      { id: 3, type: 'error', message: 'This is an error notification' },
    ];
    const normalizedData = {
      entities: {
        notifications: {
          '1': { id: 1, type: 'info', message: 'This is an info notification', isRead: false },
          '2': { id: 2, type: 'warning', message: 'This is a warning notification', isRead: false },
          '3': { id: 3, type: 'error', message: 'This is an error notification', isRead: false },
        },
      },
      result: [1, 2, 3],
    };
    const state = notificationReducer(Map(), { type: FETCH_NOTIFICATIONS_SUCCESS, data: notifications });
    expect(state).toEqual(fromJS(normalizedData));
  });

  it('should update the isRead property when MARK_AS_READ action is passed', () => {
    const initialState = fromJS({
      filter: NotificationTypeFilters.DEFAULT,
      entities: {
        notifications: {
          '1': { id: 1, type: 'info', message: 'This is an info notification', isRead: false },
          '2': { id: 2, type: 'warning', message: 'This is a warning notification', isRead: false },
          '3': { id: 3, type: 'error', message: 'This is an error notification', isRead: false },
        },
      },
      result: [1, 2, 3],
    });
    const state = notificationReducer(initialState, { type: MARK_AS_READ, notificationId: 2 });
    const expectedState = fromJS({
      filter: NotificationTypeFilters.DEFAULT,
      entities: {
        notifications: {
          '1': { id: 1, type: 'info', message: 'This is an info notification', isRead: false },
          '2': { id: 2, type: 'warning', message: 'This is a warning notification', isRead: true },
          '3': { id: 3, type: 'error', message: 'This is an error notification', isRead: false },
        },
      },
      result: [1, 2, 3],
    });
    expect(state).toEqual(expectedState);
  });

  it('should update the filter when SET_TYPE_FILTER action is passed', () => {
    const initialState = fromJS({
      filter: NotificationTypeFilters.DEFAULT,
      entities: {},
      result: [],
    });
    const state = notificationReducer(initialState, { type: SET_TYPE_FILTER, filter: 'info' });
    const expectedState = fromJS({
      filter: 'info',
      entities: {},
      result: [],
    });
    expect(state).toEqual(expectedState);
  });
});