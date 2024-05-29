import * as mockNotifications from '../../notifications.json';
import { normalize } from 'normalizr';
import schema from './schema/notifications';

// Entities
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

// Bundling the entities into a schema
const notificationSchema = { user, message, notification };

function notificationsNormalizer(data) {
  return normalize(data, [notification]);
}

function getAllNotificationsByUser(userId) {
  const normalizedData = notificationsNormalizer(mockNotifications);
  const userMessages = [];

  for (const notificationId of normalizedData.result) {
    const notification = normalizedData.entities.notifications[notificationId];
    if (notification.author === userId) {
      const message = normalizedData.entities.messages[notification.context];
      userMessages.push(message);
    }
  }

  return userMessages;
}

export default getAllNotificationsByUser;
export { notificationSchema }; // for fun
