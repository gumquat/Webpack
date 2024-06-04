import { Map } from 'immutable';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions/uiActionTypes';

const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: null
});

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);
    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);
    case LOGIN_SUCCESS:
      return state
        .set('isUserLoggedIn', true)
        .set('user', Map(action.payload.user || {}));
    case LOGIN_FAILURE:
      return state
        .set('isUserLoggedIn', false)
        .set('user', null);
    // remove this case below if things are breaking
    case LOGIN:
      return state.set('user', Map(action.payload.user || {}));
    case LOGOUT:
      return state
        .set('isUserLoggedIn', false)
        .set('user', null);
    default:
      return state;
  }
};

export default uiReducer;