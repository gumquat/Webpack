import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  notificationItem: {
    width: '100%',
    borderBottom: '1px solid black',
    fontSize: '20px',
    padding: '10px 8px',
    boxSizing: 'border-box',
  },
});

const NotificationItem = ({ type, value, html, markAsRead }) => {
  const handleClick = () => {
    markAsRead();
  };

  const renderMarkAsReadButton = () => {
    if (!html) return null;
    return (
      <button
        style={{ float: 'right' }}
        aria-label="Mark as read"
        onClick={handleClick}
      >
        Mark as read
      </button>
    );
  };

  return (
    <li
      className={css(styles.notificationItem)}
      data-notification-type={type}
      onClick={handleClick}
    >
      {html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : value}
      {renderMarkAsReadButton()}
    </li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  value: '',
  html: null,
};

export default NotificationItem;