import React from 'react';
import './LoadingState.css';

const SQL_MESSAGES = [
  'Analyzing your SQL skills…',
  'Joining the knowledge tables…',
  'Selecting the best content…',
  'Indexing your learning path…',
  'Executing the curriculum query…',
];

function LoadingState({ message }) {
  const displayMessage =
    message || SQL_MESSAGES[Math.floor(Math.random() * SQL_MESSAGES.length)];

  return (
    <div className="loading-state" role="status" aria-live="polite">
      <div className="loading-state__spinner" aria-hidden="true">
        <div className="loading-state__ring" />
        <div className="loading-state__ring loading-state__ring--inner" />
      </div>
      <p className="loading-state__message">{displayMessage}</p>
    </div>
  );
}

export default LoadingState;
