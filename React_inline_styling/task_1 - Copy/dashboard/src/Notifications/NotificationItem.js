import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  defaultItem: {
    color: 'blue',
  },
  urgentItem: {
    color: 'red',
  },
});

const NotificationItem = React.memo(function NotificationItem({ id, type = 'default', html, value, markAsRead }) {
  const handleClick = () => {
    markAsRead(id);
  };

  const listItemStyles = type === 'urgent' ? styles.urgentItem : styles.defaultItem;

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
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
};

export default NotificationItem;
