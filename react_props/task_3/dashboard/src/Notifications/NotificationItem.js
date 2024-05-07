import React from 'react';


function NotificationItem({ type, html, value }) {
  // html is provided -> renders a div with dangerouslySetInnerHTML
  // not provided -> renders a span with the text value
  const listItemContent = html ? (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
  ) : (
    <li data-notification-type={type}>{value}</li>
  );

  return listItemContent;
}

export default NotificationItem;