import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from './uiActionCreators';

describe('login', () => {
  it('should return the correct action object', () => {
    const expectedAction = {
      type: 'LOGIN',
      user: { email: 'test@example.com', password: 'password123' },
    };
    expect(login('test@example.com', 'password123')).toEqual(expectedAction);
  });
});

describe('logout', () => {
  it('should return the correct action object', () => {
    const expectedAction = { type: 'LOGOUT' };
    expect(logout()).toEqual(expectedAction);
  });
});

describe('displayNotificationDrawer', () => {
  it('should return the correct action object', () => {
    const expectedAction = { type: 'DISPLAY_NOTIFICATION_DRAWER' };
    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });
});

describe('hideNotificationDrawer', () => {
  it('should return the correct action object', () => {
    const expectedAction = { type: 'HIDE_NOTIFICATION_DRAWER' };
    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });
});