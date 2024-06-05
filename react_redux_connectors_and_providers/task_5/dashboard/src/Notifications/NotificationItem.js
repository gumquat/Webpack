import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  defaultItem: {
    color: 'blue',
    borderBottom: '2px solid black',
  },
  urgentItem: {
    color: 'red',
    borderBottom: '2px solid black',
  },
  notificationItem: {
    fontSize: '20px',
    padding: '10px 8px',
    boxSizing: 'border-box',
  },
  drawerItem: {
    width: '100%',
  },
});

const NotificationItem = React.memo(function NotificationItem({ id, type = 'default', html, value, markAsRead, displayDrawer }) {
  const handleClick = () => {
    markAsRead(id);
  };

  const listItemStyles = [
    styles.notificationItem,
    type === 'urgent' ? styles.urgentItem : styles.defaultItem,
    displayDrawer ? styles.drawerItem : null,
  ];

  const listItemContent = html ? (
    <li className={css(listItemStyles)} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={handleClick}></li>
  ) : (
    <li className={css(listItemStyles)} data-notification-type={type} onClick={handleClick}>{value}</li>
  );

  return listItemContent;
});

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number.isRequired,
  displayDrawer: PropTypes.bool,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
  displayDrawer: false,
};

export default NotificationItem;