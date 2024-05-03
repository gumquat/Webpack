import React from "react";
import './Notifications.css';
import { getLatestNotification } from './utils';

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
          <li data-priority="default">New course available</li>
          <li data-priority="urgent">New resume available</li>
          <li
            data-priority="urgent"
            dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
          ></li>
        </ul>
      </div>
    </div>
  </div>
);

export function Notifications() {
  return renderNotifications();
}