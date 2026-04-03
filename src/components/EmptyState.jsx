import React from 'react';
import './EmptyState.css';

function EmptyState({
  title = 'Nothing here yet',
  message = 'Select a topic from the sidebar to start learning.',
  icon = '📚',
}) {
  return (
    <div className="empty-state">
      <div className="empty-state__icon" aria-hidden="true">{icon}</div>
      <h3 className="empty-state__title">{title}</h3>
      <p className="empty-state__message">{message}</p>
    </div>
  );
}

export default EmptyState;
