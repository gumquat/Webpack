import * as mockNotifications from '../../notifications.json';
import * as schema from 'normalizr';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

function getAllNotificationsByUser(userId) {
  const userNotifications = mockNotifications.filter(notification => notification.author.id === userId);
  const normalizedData = schema.normalize(userNotifications, [notification]);
  return normalizedData.entities.messages;
}

export default getAllNotificationsByUser;
