import React, { useState } from 'react';
import './QuizTopic.css';

function QuizTopic() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'Which SQL command is used to retrieve data from a table?',
      options: ['INSERT', 'SELECT', 'UPDATE', 'DELETE'],
      correct: 1,
      category: 'DML'
    },
    {
      id: 2,
      question: 'What does the WHERE clause do?',
      options: ['Groups results', 'Filters rows based on conditions', 'Orders results', 'Joins tables'],
      correct: 1,
      category: 'DML'
    },
    {
      id: 3,
      question: 'Which operator checks if a value exists in a list?',
      options: ['BETWEEN', 'IN', 'LIKE', 'EXISTS'],
      correct: 1,
      category: 'Operators'
    },
    {
      id: 4,
      question: 'What is the result of UPPER("hello")?',
      options: ['"hello"', '"Hello"', '"HELLO"', 'Error'],
      correct: 2,
      category: 'Functions'
    },
    {
      id: 5,
      question: 'Which JOIN returns only matching rows from both tables?',
      options: ['LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'FULL OUTER JOIN'],
      correct: 2,
      category: 'Joins'
    },
    {
      id: 6,
      question: 'What does a subquery return in a scalar context?',
      options: ['Multiple rows', 'Single value', 'Table structure', 'Boolean'],
      correct: 1,
      category: 'Subqueries'
    },
    {
      id: 7,
      question: 'What does a SEQUENCE generate?',
      options: ['Random numbers', 'Text strings', 'Unique sequential numbers', 'Dates'],
      correct: 2,
      category: 'Sequences'
    },
    {
      id: 8,
      question: 'What must all PL/SQL blocks have?',
      options: ['DECLARE section', 'BEGIN section', 'EXCEPTION section', 'All of the above'],
      correct: 1,
      category: 'PL/SQL'
    },
    {
      id: 9,
      question: 'What is the main difference between procedures and functions?',
      options: ['Procedures are faster', 'Functions always return a value', 'Procedures are simpler', 'Same thing'],
      correct: 1,
      category: 'Procedures'
    },
    {
      id: 10,
      question: 'When does a trigger execute?',
      options: ['At scheduling time', 'On specific events (INSERT/UPDATE/DELETE)', 'On demand with CALL', 'During backup'],
      correct: 1,
      category: 'Triggers'
    },
  ];

  const handleAnswerChange = (questionId, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerIndex
    });
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correct) {
        correct++;
      }
    });
    return correct;
  };

  const score = calculateScore();
  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="topic-content">
      <div className="content-header">
        <h2>✅ Quiz & Assessment</h2>
        <p>Test your understanding of Database Systems concepts</p>
      </div>

      {!showResults ? (
        <>
          <div className="quiz-container">
            {questions.map((q, index) => (
              <div key={q.id} className="quiz-question">
                <div className="question-header">
                  <h4>Question {index + 1} of {questions.length}</h4>
                  <span className="category-badge">{q.category}</span>
                </div>
                <p className="question-text">{q.question}</p>
                <div className="options">
                  {q.options.map((option, optionIndex) => (
                    <label key={optionIndex} className="option">
                      <input
                        type="radio"
                        name={`question-${q.id}`}
                        value={optionIndex}
                        checked={selectedAnswers[q.id] === optionIndex}
                        onChange={() => handleAnswerChange(q.id, optionIndex)}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="quiz-actions">
            <button onClick={handleSubmit} className="submit-btn">
              Submit Quiz
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="results-container">
            <div className="score-card">
              <h3>Your Score</h3>
              <div className="score-display">
                <div className="score-number">{score}</div>
                <div className="score-max">out of {questions.length}</div>
                <div className={`score-percentage ${percentage >= 70 ? 'pass' : 'fail'}`}>
                  {percentage}%
                </div>
              </div>
              <div className="score-message">
                {percentage >= 90 && <p>🌟 Excellent! Outstanding performance!</p>}
                {percentage >= 70 && percentage < 90 && <p>✅ Good job! Keep practicing to improve!</p>}
                {percentage >= 50 && percentage < 70 && <p>📖 Fair effort. Review the material and try again.</p>}
                {percentage < 50 && <p>💪 Keep learning! Review the material and practice more.</p>}
              </div>
            </div>

            <div className="results-list">
              <h3>Detailed Results</h3>
              {questions.map((q, index) => {
                const isCorrect = selectedAnswers[q.id] === q.correct;
                return (
                  <div key={q.id} className={`result-item ${isCorrect ? 'correct' : 'incorrect'}`}>
                    <div className="result-header">
                      <span className="result-icon">{isCorrect ? '✓' : '✗'}</span>
                      <span className="result-number">Question {index + 1}</span>
                    </div>
                    <p className="result-question">{q.question}</p>
                    <div className="result-details">
                      <p><strong>Your answer:</strong> {q.options[selectedAnswers[q.id]]}</p>
                      {!isCorrect && (
                        <p><strong>Correct answer:</strong> {q.options[q.correct]}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="quiz-actions">
            <button onClick={handleReset} className="reset-btn">
              Retake Quiz
            </button>
          </div>
        </>
      )}

      <div className="quiz-tips">
        <h3>Tips for Assessment</h3>
        <ul>
          <li>Take your time and read each question carefully</li>
          <li>Review the course material before taking the quiz</li>
          <li>Aim for at least 70% to demonstrate mastery</li>
          <li>Focus on understanding concepts, not just memorizing</li>
          <li>Retake the quiz multiple times to improve your score</li>
        </ul>
      </div>
    </div>
  );
}

export default QuizTopic;
