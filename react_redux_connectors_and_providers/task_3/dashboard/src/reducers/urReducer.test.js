import uiReducer from './uiReducer';
import { Map } from 'immutable';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: null
  });

  it('should return the initial state', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const expectedState = initialState.set('isNotificationDrawerVisible', true);
    expect(uiReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    const action = { type: HIDE_NOTIFICATION_DRAWER };
    const expectedState = initialState.set('isNotificationDrawerVisible', false);
    expect(uiReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle LOGIN_SUCCESS', () => {
    const action = { type: LOGIN_SUCCESS, payload: { user: { email: 'test@example.com' } } };
    const expectedState = initialState.set('isUserLoggedIn', true).set('user', Map({ email: 'test@example.com' }));
    expect(uiReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle LOGIN_FAILURE', () => {
    const action = { type: LOGIN_FAILURE };
    const expectedState = initialState.set('isUserLoggedIn', false).set('user', null);
    expect(uiReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle LOGIN', () => {
    const action = { type: LOGIN, payload: { user: { email: 'test@example.com' } } };
    const expectedState = initialState.set('user', Map({ email: 'test@example.com' }));
    expect(uiReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle LOGOUT', () => {
    const action = { type: LOGOUT };
    const expectedState = initialState.set('isUserLoggedIn', false).set('user', null);
    expect(uiReducer(initialState, action)).toEqual(expectedState);
  });
});