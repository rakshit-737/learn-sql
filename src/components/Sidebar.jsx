import React, { useState } from 'react';
import './Sidebar.css';
import { FaChevronDown, FaBook, FaGraduationCap } from 'react-icons/fa';

const topics = [
  { id: 'intro', label: 'Introduction', icon: '📚' },
  { id: 'dml', label: 'DML Commands', icon: '📝' },
  { id: 'operators', label: 'Operators', icon: '⚙️' },
  { id: 'functions', label: 'Functions', icon: '🔧' },
  { id: 'joins', label: 'Joins', icon: '🔗' },
  { id: 'subqueries', label: 'Subqueries & Views', icon: '📊' },
  { id: 'sequences', label: 'Sequences & Synonyms', icon: '🔢' },
  { id: 'plsql', label: 'PL/SQL Basics', icon: '💻' },
  { id: 'procedures', label: 'Procedures & Functions', icon: '⚡' },
  { id: 'triggers', label: 'Triggers & Cursors', icon: '🎯' },
  { id: 'quiz', label: 'Quiz & Assessment', icon: '✅' },
];

function Sidebar({ currentTopic, onTopicChange }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <button 
          className="toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
          title={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          <FaChevronDown size={20} />
        </button>
      </div>

      {isOpen && (
        <nav className="topics-list">
          {topics.map((topic) => (
            <button
              key={topic.id}
              className={`topic-btn ${currentTopic === topic.id ? 'active' : ''}`}
              onClick={() => onTopicChange(topic.id)}
              title={topic.label}
            >
              <span className="topic-icon">{topic.icon}</span>
              <span className="topic-label">{topic.label}</span>
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}

export default Sidebar;
