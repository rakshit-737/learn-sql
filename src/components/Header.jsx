import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaDatabase, FaBars, FaTimes } from 'react-icons/fa';
import { useStore } from '../store/store';

const TOPICS = [
  'intro', 'dml', 'operators', 'functions', 'joins',
  'subqueries', 'sequences', 'plsql', 'procedures', 'triggers', 'quickref', 'quiz'
];

function Header({ onMenuToggle, mobileMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const { currentTopic, setCurrentTopic } = useStore();

  const topicIndex = TOPICS.indexOf(currentTopic);
  const progressPct = topicIndex >= 0
    ? Math.round(((topicIndex + 1) / TOPICS.length) * 100)
    : 0;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header-content">
        {/* Mobile menu toggle */}
        <button
          className="header-menu-btn"
          onClick={onMenuToggle}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          title={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
        </button>

        {/* Logo */}
        <button
          className="logo-section"
          onClick={() => setCurrentTopic('intro')}
          title="Go to Introduction"
        >
          <div className="logo-icon-wrap">
            <FaDatabase className="logo-icon" aria-hidden="true" />
          </div>
          <div className="logo-text">
            <span className="logo-title">Database Lab</span>
            <span className="logo-sub">SQL &amp; PL/SQL Mastery</span>
          </div>
        </button>

        {/* Progress pill */}
        <div className="header-meta">
          <div className="progress-pill" title={`${progressPct}% through the course`}>
            <span className="progress-pill__label">Progress</span>
            <span className="progress-pill__value">{progressPct}%</span>
          </div>
          <a
            href="https://github.com/rakshit-737/learn-sql"
            className="header-link"
            target="_blank"
            rel="noreferrer"
            aria-label="View source on GitHub"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Reading-progress bar */}
      <div className="progress-track" aria-hidden="true">
        <div
          className="progress-fill"
          style={{ width: `${progressPct}%` }}
        />
      </div>
    </header>
  );
}

export default Header;
