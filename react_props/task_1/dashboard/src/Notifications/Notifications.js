import React from "react";
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from "./NotificationItem";

export function Notifications() {
  const handleButtonClick = () => {
    console.log("Close button has been clicked");
  };

  const renderNotifications = () => (
    <div className="root-notifications" style={{ width: "100%", boxSizing: "border-box" }}>
      <div style={{ padding: "1rem", maxWidth: "800px" }}>
        <div style={{ position: "relative" }}>
          <button
            style={{
              position: "absolute",
              top: "0.5rem",
              right: "0.5rem",
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
            aria-label="Close"
            onClick={handleButtonClick}
          >
            x
          </button>
          <p>
            Here is the list of notifications
          </p>
          <ul>
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
          </ul>
        </div>
      </div>
    </div>
  );

  return renderNotifications();
}

export default Notifications;