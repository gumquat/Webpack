import initialState from './uiReducer';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './actions/uiActionTypes';

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: true
      };
    case HIDE_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true,
        user: action.payload.user || {} // Update the user object with the payload data
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isUserLoggedIn: false,
        user: {} // Reset the user object to an empty object
      };
    case LOGOUT:
      return {
        ...state,
        isUserLoggedIn: false,
        user: {}
      };
    default:
      return state;
  }
};

export default uiReducer;