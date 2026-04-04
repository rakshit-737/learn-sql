import React from 'react';
import { useStore } from '../../store/store';
import './IntroTopic.css';

const STATS = [
  { value: '11',   label: 'Topics',          emoji: '📚' },
  { value: '50+',  label: 'Code Examples',   emoji: '💻' },
  { value: '30+',  label: 'Exercises',       emoji: '✍️' },
  { value: '10',   label: 'Quiz Questions',  emoji: '🏆' },
];

const FEATURES = [
  {
    emoji: '📖',
    title: 'Detailed Theory',
    desc: 'Complete explanations with real-world context for every SQL and PL/SQL concept.',
  },
  {
    emoji: '💻',
    title: 'Live Code Examples',
    desc: 'Copy-paste ready syntax with terminal-style code blocks for instant use.',
  },
  {
    emoji: '✍️',
    title: 'Practice Exercises',
    desc: 'Hands-on problems after each topic to reinforce what you\'ve learned.',
  },
  {
    emoji: '📋',
    title: 'Quick Reference',
    desc: 'A full cheat sheet of every command, function, and pattern — always one click away.',
  },
  {
    emoji: '🏆',
    title: 'Assessment Quiz',
    desc: 'Test your knowledge across all topics and get instant feedback with explanations.',
  },
  {
    emoji: '📱',
    title: 'Responsive Design',
    desc: 'Study anywhere — optimised for desktop, tablet, and mobile screens.',
  },
];

const TOPICS_OVERVIEW = [
  { label: 'DML Commands',         desc: 'INSERT, UPDATE, DELETE, SELECT',          level: 'Beginner',     color: 'green' },
  { label: 'Operators',            desc: 'Comparison, Logical, Arithmetic',          level: 'Beginner',     color: 'green' },
  { label: 'Functions',            desc: 'String, Numeric, Date, Aggregate',         level: 'Intermediate', color: 'amber' },
  { label: 'Joins',                desc: 'INNER, OUTER, CROSS, SELF',               level: 'Intermediate', color: 'amber' },
  { label: 'Subqueries & Views',   desc: 'Nested queries and virtual tables',        level: 'Intermediate', color: 'amber' },
  { label: 'Sequences & Synonyms', desc: 'Auto-increment IDs and aliases',           level: 'Intermediate', color: 'amber' },
  { label: 'PL/SQL Basics',        desc: 'Blocks, variables, control structures',    level: 'Advanced',     color: 'red' },
  { label: 'Procedures & Functions', desc: 'Reusable named PL/SQL blocks',           level: 'Advanced',     color: 'red' },
  { label: 'Triggers & Cursors',   desc: 'Event-driven programming, row iteration',  level: 'Advanced',     color: 'red' },
  { label: 'Quick Reference',      desc: 'Full cheat sheet — every command',         level: 'Reference',    color: 'cyan' },
  { label: 'Quiz & Assessment',    desc: 'Test yourself across all topics',          level: 'Assessment',   color: 'purple' },
];

function IntroTopic() {
  const { setCurrentTopic } = useStore();

  return (
    <div className="topic-content intro-topic">

      {/* Hero */}
      <div className="intro-hero reveal">
        <div className="intro-hero__badge">Engineering Database Systems Lab</div>
        <h1 className="intro-hero__title">
          Master <span className="intro-hero__highlight">SQL</span> &amp; <span className="intro-hero__highlight">PL/SQL</span>
        </h1>
        <p className="intro-hero__sub">
          A complete interactive learning platform — from beginner DML to advanced PL/SQL
          procedures, triggers, and cursors.
        </p>
        <div className="intro-hero__actions">
          <button
            className="btn btn--primary btn--lg"
            onClick={() => setCurrentTopic('dml')}
          >
            Start Learning →
          </button>
          <button
            className="btn btn--outline btn--lg"
            onClick={() => setCurrentTopic('quickref')}
          >
            📋 Quick Reference
          </button>
        </div>
      </div>

      {/* Stats row */}
      <div className="intro-stats reveal">
        {STATS.map((s) => (
          <div key={s.label} className="intro-stat">
            <span className="intro-stat__emoji" aria-hidden="true">{s.emoji}</span>
            <span className="intro-stat__value">{s.value}</span>
            <span className="intro-stat__label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Features grid */}
      <div className="content-section reveal">
        <h3>What's Included</h3>
        <div className="intro-features">
          {FEATURES.map((f) => (
            <div key={f.title} className="intro-feature-card">
              <div className="intro-feature-card__icon" aria-hidden="true">{f.emoji}</div>
              <div>
                <strong className="intro-feature-card__title">{f.title}</strong>
                <p className="intro-feature-card__desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Topics grid */}
      <div className="content-section reveal">
        <h3>Course Topics</h3>
        <div className="intro-topics-grid">
          {TOPICS_OVERVIEW.map((t) => (
            <div key={t.label} className={`intro-topic-card intro-topic-card--${t.color}`}>
              <div className="intro-topic-card__header">
                <span className="intro-topic-card__title">{t.label}</span>
                <span className={`intro-topic-card__badge intro-topic-card__badge--${t.color}`}>{t.level}</span>
              </div>
              <p className="intro-topic-card__desc">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How to use */}
      <div className="content-section reveal">
        <h3>How to Use This Platform</h3>
        <ol className="intro-steps">
          {[
            ['Select a Topic', 'Click any entry in the sidebar to jump straight in.'],
            ['Read the Explanation', 'Understand the concept with clear theory and examples.'],
            ['Study Code Examples', 'Copy syntax directly from the terminal-style blocks.'],
            ['Complete Exercises', 'Each topic ends with practice problems.'],
            ['Take the Quiz', 'Test yourself across all topics for a final score.'],
            ['Use Quick Reference', 'Keep the cheat sheet open while you code.'],
          ].map(([title, desc], i) => (
            <li key={i} className="intro-step">
              <span className="intro-step__num">{i + 1}</span>
              <div>
                <strong>{title}</strong>
                <span className="intro-step__desc"> — {desc}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="note-box reveal">
        <strong>💡 Pro Tip:</strong> Work through topics in order — each builds on previous concepts.
        Keep the <button
          className="note-link-btn"
          onClick={() => setCurrentTopic('quickref')}
        >Quick Reference</button> open in a second window while you practise.
      </div>

    </div>
  );
}

export default IntroTopic;

