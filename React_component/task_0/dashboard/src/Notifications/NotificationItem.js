import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type = 'default', html, value }) {
  const listItemContent = html ? (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
  ) : (
    <li data-notification-type={type}>{value}</li>
  );

  return listItemContent;
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string,
  value: PropTypes.string,
};

// doesnt default to 'default' by default, so i made this
NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;
