import React, { useState, useEffect, useCallback } from 'react';
import './QuizTopic.css';

const questions = [
  {
    id: 1,
    question: 'Which SQL command retrieves data from a table?',
    options: ['INSERT', 'SELECT', 'UPDATE', 'DELETE'],
    correct: 1,
    category: 'DML',
    explanation: 'SELECT is the fundamental retrieval command — it reads rows from one or more tables without modifying the data.',
  },
  {
    id: 2,
    question: 'What does the WHERE clause do?',
    options: ['Groups result rows', 'Filters rows based on a condition', 'Orders results', 'Joins tables together'],
    correct: 1,
    category: 'DML',
    explanation: 'WHERE narrows down the result set to only rows that satisfy the given condition, applied before any grouping.',
  },
  {
    id: 3,
    question: 'Which operator checks whether a value exists in a list?',
    options: ['BETWEEN', 'IN', 'LIKE', 'EXISTS'],
    correct: 1,
    category: 'Operators',
    explanation: 'IN tests membership in a discrete list, e.g. WHERE dept IN (\'HR\', \'Engineering\').',
  },
  {
    id: 4,
    question: 'What does UPPER("hello") return?',
    options: ['"hello"', '"Hello"', '"HELLO"', 'Error'],
    correct: 2,
    category: 'Functions',
    explanation: 'UPPER() converts every character in the string to its uppercase equivalent.',
  },
  {
    id: 5,
    question: 'Which JOIN type returns only rows that match in both tables?',
    options: ['LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'FULL OUTER JOIN'],
    correct: 2,
    category: 'Joins',
    explanation: 'INNER JOIN is the most restrictive join — it discards rows from either table that have no match on the other side.',
  },
  {
    id: 6,
    question: 'What does a scalar subquery return?',
    options: ['Multiple rows', 'A single value', 'A table structure', 'A boolean'],
    correct: 1,
    category: 'Subqueries',
    explanation: 'A scalar subquery is constrained to return exactly one row and one column, producing a single value usable in expressions.',
  },
  {
    id: 7,
    question: 'What does a SEQUENCE generate?',
    options: ['Random numbers', 'Text strings', 'Unique sequential numbers', 'Date values'],
    correct: 2,
    category: 'Sequences',
    explanation: 'A SEQUENCE object produces a series of unique integers, often used as surrogate primary keys.',
  },
  {
    id: 8,
    question: 'Which section is required in every PL/SQL block?',
    options: ['DECLARE', 'BEGIN … END', 'EXCEPTION', 'All three'],
    correct: 1,
    category: 'PL/SQL',
    explanation: 'The BEGIN … END block is the only mandatory section. DECLARE and EXCEPTION are optional.',
  },
  {
    id: 9,
    question: 'What is the key difference between a procedure and a function?',
    options: [
      'Procedures execute faster',
      'Functions must return a value',
      'Procedures are simpler',
      'They are identical constructs',
    ],
    correct: 1,
    category: 'Procedures',
    explanation: 'Functions are required to return a value via the RETURN statement, while procedures perform actions and may use OUT parameters instead.',
  },
  {
    id: 10,
    question: 'When does a database trigger fire?',
    options: [
      'On a schedule',
      'On INSERT, UPDATE, or DELETE events',
      'When called with EXEC',
      'During a full backup',
    ],
    correct: 1,
    category: 'Triggers',
    explanation: 'Triggers are event-driven — they automatically execute in response to DML events on a specified table.',
  },
];

const SCORE_TIERS = [
  { min: 90, label: 'Outstanding!',    message: 'You have strong command of SQL & PL/SQL fundamentals. Excellent work.',     emoji: '🏆' },
  { min: 70, label: 'Well done!',      message: 'Solid understanding overall. A bit more practice on the tricky spots and you\'ll be there.', emoji: '✅' },
  { min: 50, label: 'Good progress.',  message: 'You\'re getting there. Review the topics where you stumbled and try again.', emoji: '📖' },
  { min: 0,  label: 'Keep going.',     message: 'Every expert started here. Go through the lessons again — it sticks with practice.', emoji: '💡' },
];

function getScoreTier(pct) {
  return SCORE_TIERS.find((t) => pct >= t.min);
}

/* Confetti burst (pure CSS + JS, no library) */
function ConfettiBurst() {
  return (
    <div className="confetti-burst" aria-hidden="true">
      {Array.from({ length: 24 }).map((_, i) => (
        <span
          key={i}
          className="confetti-piece"
          style={{
            '--angle': `${(i / 24) * 360}deg`,
            '--delay': `${(i % 6) * 60}ms`,
            '--hue': `${(i * 15) % 360}`,
          }}
        />
      ))}
    </div>
  );
}

function QuizTopic() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const handleAnswerChange = useCallback((questionId, answerIndex) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answerIndex }));
  }, []);

  const handleSubmit = useCallback(() => {
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleReset = useCallback(() => {
    setSelectedAnswers({});
    setShowResults(false);
    setShowCelebration(false);
  }, []);

  const score = questions.reduce(
    (acc, q) => acc + (selectedAnswers[q.id] === q.correct ? 1 : 0),
    0
  );
  const percentage = Math.round((score / questions.length) * 100);
  const tier = getScoreTier(percentage);
  const answeredCount = Object.keys(selectedAnswers).length;

  /* Trigger celebration for good scores */
  useEffect(() => {
    if (showResults && percentage >= 70) {
      setShowCelebration(true);
      const t = setTimeout(() => setShowCelebration(false), 3000);
      return () => clearTimeout(t);
    }
  }, [showResults, percentage]);

  return (
    <div className="topic-content">
      <div className="content-header">
        <h2>Quiz &amp; Assessment</h2>
        <p>Test your understanding across all Database Systems topics.</p>
      </div>

      {!showResults ? (
        <>
          {/* Progress indicator */}
          <div className="quiz-meta">
            <span className="quiz-meta__count">
              {answeredCount} / {questions.length} answered
            </span>
            <div className="quiz-meta__bar">
              <div
                className="quiz-meta__fill"
                style={{ width: `${(answeredCount / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="quiz-list">
            {questions.map((q, index) => (
              <div key={q.id} className="quiz-question reveal">
                <div className="question-header">
                  <span className="question-number">Q{index + 1}</span>
                  <span className="category-badge">{q.category}</span>
                </div>
                <p className="question-text">{q.question}</p>
                <div className="options" role="group" aria-labelledby={`q-${q.id}-label`}>
                  {q.options.map((option, optionIndex) => (
                    <label
                      key={optionIndex}
                      className={`option${selectedAnswers[q.id] === optionIndex ? ' option--selected' : ''}`}
                    >
                      <input
                        type="radio"
                        name={`question-${q.id}`}
                        value={optionIndex}
                        checked={selectedAnswers[q.id] === optionIndex}
                        onChange={() => handleAnswerChange(q.id, optionIndex)}
                        className="visually-hidden"
                        aria-label={option}
                      />
                      <span className="option__indicator" aria-hidden="true" />
                      <span className="option__text">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="quiz-actions">
            <button
              onClick={handleSubmit}
              className="btn btn--primary btn--lg"
              disabled={answeredCount < questions.length}
              title={answeredCount < questions.length ? `Answer all ${questions.length} questions to submit` : 'Submit your answers'}
            >
              {answeredCount < questions.length
                ? `Answer ${questions.length - answeredCount} more to submit`
                : 'Submit answers'}
            </button>
          </div>
        </>
      ) : (
        <>
          {showCelebration && <ConfettiBurst />}

          {/* Score card */}
          <div className={`score-card score-card--${percentage >= 70 ? 'pass' : 'needs-work'}`}>
            <div className="score-card__emoji">{tier.emoji}</div>
            <div className="score-card__numbers">
              <span className="score-card__score">{score}</span>
              <span className="score-card__denom">/ {questions.length}</span>
            </div>
            <div className="score-card__pct">{percentage}%</div>
            <h3 className="score-card__tier">{tier.label}</h3>
            <p className="score-card__message">{tier.message}</p>
          </div>

          {/* Detailed results */}
          <div className="results-list">
            <h3 className="results-list__heading">Question breakdown</h3>
            {questions.map((q, index) => {
              const isCorrect = selectedAnswers[q.id] === q.correct;
              return (
                <div
                  key={q.id}
                  className={`result-item${isCorrect ? ' result-item--correct' : ' result-item--incorrect'}`}
                >
                  <div className="result-item__header">
                    <span className="result-item__status" aria-label={isCorrect ? 'Correct' : 'Incorrect'}>
                      {isCorrect ? '✓' : '✗'}
                    </span>
                    <span className="result-item__num">Question {index + 1}</span>
                    <span className="category-badge">{q.category}</span>
                  </div>
                  <p className="result-item__question">{q.question}</p>
                  {!isCorrect && (
                    <div className="result-item__answers">
                      <p className="result-item__answer result-item__answer--wrong">
                        <strong>Your answer:</strong> {q.options[selectedAnswers[q.id]] ?? '(not answered)'}
                      </p>
                      <p className="result-item__answer result-item__answer--right">
                        <strong>Correct:</strong> {q.options[q.correct]}
                      </p>
                    </div>
                  )}
                  <p className="result-item__explanation">{q.explanation}</p>
                </div>
              );
            })}
          </div>

          <div className="quiz-actions">
            <button onClick={handleReset} className="btn btn--outline btn--lg">
              Retake quiz
            </button>
          </div>
        </>
      )}

      <div className="content-section quiz-tips reveal">
        <h3>How to get the most from this quiz</h3>
        <ul>
          <li>Read each question fully before selecting an answer.</li>
          <li>Review the relevant lesson if a topic feels unclear.</li>
          <li>Aim for 70%+ to demonstrate solid conceptual grounding.</li>
          <li>Focus on understanding the <em>why</em>, not just the syntax.</li>
          <li>Retake after reviewing — spaced repetition accelerates retention.</li>
        </ul>
      </div>
    </div>
  );
}

export default QuizTopic;
