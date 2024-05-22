import * as mockNotifications from '../../notifications.json';

function getAllNotificationsByUser(userId) {
    return mockNotifications.filter(notification => notification.author.id === userId)
        .map(notification => notification.context);
}

export default getAllNotificationsByUser;