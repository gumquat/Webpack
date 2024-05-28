import * as mockNotifications from '../../notifications.json';
import { normalize } from 'normalizr';
import schema from './schema/notifications';

// Ntitties
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

// bundling the Ntitties into a schema
const schema = { user, message, notification };

function getAllNotificationsByUser(userId) {
  const normalizedData = normalize(mockNotifications, [schema]);
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
export { schema }; // for fun
