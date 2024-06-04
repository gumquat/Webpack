import { Map, fromJS } from 'immutable';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector';
import { NotificationTypeFilters } from './notificationActionTypes';

describe('notificationSelector', () => {
  const state = fromJS({
    notifications: {
      filter: NotificationTypeFilters.DEFAULT,
      entities: {
        notifications: {
          '1': { id: 1, type: 'info', message: 'This is an info notification', isRead: false },
          '2': { id: 2, type: 'warning', message: 'This is a warning notification', isRead: true },
          '3': { id: 3, type: 'error', message: 'This is an error notification', isRead: false },
        },
      },
      result: [1, 2, 3],
    },
  });

  it('should return the correct filter value', () => {
    const filter = filterTypeSelected(state);
    expect(filter).toEqual(NotificationTypeFilters.DEFAULT);
  });

  it('should return a list of all notification entities', () => {
    const notifications = getNotifications(state);
    const expectedNotifications = Map({
      '1': Map({ id: 1, type: 'info', message: 'This is an info notification', isRead: false }),
      '2': Map({ id: 2, type: 'warning', message: 'This is a warning notification', isRead: true }),
      '3': Map({ id: 3, type: 'error', message: 'This is an error notification', isRead: false }),
    });
    expect(notifications).toEqual(expectedNotifications);
  });

  it('should return a list of unread notification entities', () => {
    const unreadNotifications = getUnreadNotifications(state);
    const expectedUnreadNotifications = Map({
      '1': Map({ id: 1, type: 'info', message: 'This is an info notification', isRead: false }),
      '3': Map({ id: 3, type: 'error', message: 'This is an error notification', isRead: false }),
    });
    expect(unreadNotifications).toEqual(expectedUnreadNotifications);
  });
});