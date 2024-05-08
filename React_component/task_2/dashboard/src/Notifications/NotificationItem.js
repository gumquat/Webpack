import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.Component {
  handleClick = () => {
    const { markAsRead, id } = this.props;
    markAsRead(id);
  }

  render() {
    const { type = 'default', html, value } = this.props;

    const listItemContent = html ? (
      <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={this.handleClick}></li>
    ) : (
      <li data-notification-type={type} onClick={this.handleClick}>{value}</li>
    );

    return listItemContent;
  }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number.isRequired, // Add prop type for id
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {}, // Add default prop for markAsRead
};

export default NotificationItem;