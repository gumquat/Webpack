import { Map } from 'immutable';
import uiReducer, { initialState } from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER
} from './actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const state = uiReducer(initialState, { type: 'SELECT_COURSE' });
    expect(state).toEqual(initialState);
  });

  it('should update isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const state = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
    const expectedState = initialState.set('isNotificationDrawerVisible', true);
    expect(state).toEqual(expectedState);
  });
});