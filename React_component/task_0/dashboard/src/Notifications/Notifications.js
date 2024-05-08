import React from "react";
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from "./NotificationItem";
import { NotificationItemShape } from './NotificationItemShape';
import PropTypes from 'prop-types';

export function Notifications( {displayDrawer }) {

  // button function
  const handleButtonClick = () => {
    console.log("Close button has been clicked");
  };

  // styling
  const buttonStyle = {
    position: "absolute",
    top: "0.5rem",
    right: "0.5rem",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer"
  }

  // what is returned to page
  return (
    <>
      <div className="menuItem">
        <p>Your Notifications</p>
      </div>
      {displayDrawer && (
        <div className="Notifications">
        <div className="root-notifications" style={{ width: "100%", boxSizing: "border-box" }}>
        <div style={{ padding: "1rem", maxWidth: "800px" }}>
          <div style={{ position: "relative" }}>
            <button
              style={buttonStyle}
              aria-label="Close"
              onClick={handleButtonClick}
            >
              x
            </button>
            <p>
              Here is the list of notifications
            </p>
            <ul>
            {listNotifications.length === 0 ? (
                <NotificationItem value='No new notification for now' />
              ) : (
                listNotifications.map(notification => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                  />
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
    )}
    </>
  );
}

// its a bool that...
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

// ...defaults to false
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

export default Notifications;
