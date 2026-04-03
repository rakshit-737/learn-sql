import React, { useState } from 'react';
import './Sidebar.css';
import {
  FaChevronLeft,
  FaBook,
  FaEdit,
  FaCog,
  FaTools,
  FaLink,
  FaLayerGroup,
  FaSortNumericUp,
  FaCode,
  FaProjectDiagram,
  FaBolt,
  FaCheckCircle
} from 'react-icons/fa';

const topics = [
  { id: 'intro',      label: 'Introduction',            icon: FaBook,           badge: null },
  { id: 'dml',        label: 'DML Commands',             icon: FaEdit,           badge: 'Beginner' },
  { id: 'operators',  label: 'Operators',                icon: FaCog,            badge: 'Beginner' },
  { id: 'functions',  label: 'Functions',                icon: FaTools,          badge: null },
  { id: 'joins',      label: 'Joins',                    icon: FaLink,           badge: null },
  { id: 'subqueries', label: 'Subqueries & Views',       icon: FaLayerGroup,     badge: null },
  { id: 'sequences',  label: 'Sequences & Synonyms',     icon: FaSortNumericUp,  badge: null },
  { id: 'plsql',      label: 'PL/SQL Basics',            icon: FaCode,           badge: 'Advanced' },
  { id: 'procedures', label: 'Procedures & Functions',   icon: FaProjectDiagram, badge: 'Advanced' },
  { id: 'triggers',   label: 'Triggers & Cursors',       icon: FaBolt,           badge: 'Advanced' },
  { id: 'quiz',       label: 'Quiz & Assessment',        icon: FaCheckCircle,    badge: 'Test' },
];

function Sidebar({ currentTopic, onTopicChange }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className={`sidebar${isOpen ? '' : ' sidebar--collapsed'}`}>
      {/* Collapse toggle */}
      <div className="sidebar-header">
        <button
          className="toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
          title={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          <FaChevronLeft
            className={`toggle-icon${isOpen ? '' : ' toggle-icon--flipped'}`}
            size={14}
          />
        </button>
      </div>

      {/* Section heading */}
      {isOpen && (
        <div className="sidebar-section-label">Course Topics</div>
      )}

      {/* Navigation list */}
      <nav className="topics-list" aria-label="Course topics">
        {topics.map((topic, idx) => {
          const Icon = topic.icon;
          const isActive = currentTopic === topic.id;

          return (
            <button
              key={topic.id}
              className={`topic-btn${isActive ? ' topic-btn--active' : ''}`}
              onClick={() => onTopicChange(topic.id)}
              title={!isOpen ? topic.label : undefined}
              aria-current={isActive ? 'page' : undefined}
              style={{ animationDelay: `${idx * 30}ms` }}
            >
              <span className={`topic-icon-wrap${isActive ? ' topic-icon-wrap--active' : ''}`}>
                <Icon size={15} aria-hidden="true" />
              </span>
              {isOpen && (
                <>
                  <span className="topic-label">{topic.label}</span>
                  {topic.badge && (
                    <span className={`topic-badge topic-badge--${topic.badge.toLowerCase()}`}>
                      {topic.badge}
                    </span>
                  )}
                </>
              )}
              {isActive && <span className="active-indicator" aria-hidden="true" />}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
