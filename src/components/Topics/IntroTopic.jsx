import React from 'react';

function IntroTopic() {
  return (
    <div className="topic-content">
      <div className="content-header">
        <h2>🚀 Engineering Database Systems Lab</h2>
        <p>Master SQL and PL/SQL with comprehensive lessons and hands-on exercises</p>
      </div>

      <div className="content-section">
        <h3>Welcome to Your Learning Journey</h3>
        <p>
          This comprehensive learning platform is designed to help you master database systems concepts,
          SQL queries, and PL/SQL programming. Each topic includes:
        </p>
        <ul style={{ marginLeft: '2rem', lineHeight: '2' }}>
          <li><strong>📖 Detailed Explanations:</strong> Complete theory with real-world examples</li>
          <li><strong>💻 Code Examples:</strong> Syntax demonstrations with practical queries</li>
          <li><strong>✍️ Practice Exercises:</strong> Hands-on problems to test your understanding</li>
          <li><strong>🔍 Mistake Checking:</strong> Validation and correction for your solutions</li>
          <li><strong>📊 Interactive Quizzes:</strong> Assessment tools to track your progress</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>Course Structure</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Description</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>DML Commands</strong></td>
                <td>INSERT, UPDATE, DELETE, SELECT operations</td>
                <td>Beginner</td>
              </tr>
              <tr>
                <td><strong>Operators</strong></td>
                <td>Comparison, Logical, and Arithmetic operators</td>
                <td>Beginner</td>
              </tr>
              <tr>
                <td><strong>Functions</strong></td>
                <td>String, Numeric, Date, and Aggregate functions</td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td><strong>Joins</strong></td>
                <td>INNER, OUTER, CROSS, and SELF joins</td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td><strong>Subqueries & Views</strong></td>
                <td>Nested queries and virtual tables</td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <td><strong>PL/SQL</strong></td>
                <td>Procedural language fundamentals</td>
                <td>Advanced</td>
              </tr>
              <tr>
                <td><strong>Procedures & Functions</strong></td>
                <td>Creating reusable PL/SQL blocks</td>
                <td>Advanced</td>
              </tr>
              <tr>
                <td><strong>Triggers & Cursors</strong></td>
                <td>Event-driven programming and data navigation</td>
                <td>Advanced</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="content-section">
        <h3>How to Use This Platform</h3>
        <ol style={{ marginLeft: '2rem', lineHeight: '2' }}>
          <li><strong>Select a Topic</strong> from the sidebar to begin learning</li>
          <li><strong>Read the Explanation</strong> to understand the concepts</li>
          <li><strong>Study the Examples</strong> to see practical implementations</li>
          <li><strong>Complete Exercises</strong> to practice what you've learned</li>
          <li><strong>Check Your Answers</strong> for immediate feedback</li>
          <li><strong>Take the Quiz</strong> to assess your overall knowledge</li>
        </ol>
      </div>

      <div className="note-box">
        <strong>💡 Pro Tip:</strong> Work through topics sequentially. Each topic builds on previous concepts.
        Make sure you understand the fundamentals before moving to advanced topics.
      </div>

      <div className="content-section">
        <h3>Learning Objectives</h3>
        <p>By completing this course, you will be able to:</p>
        <ul style={{ marginLeft: '2rem', lineHeight: '2' }}>
          <li>Write efficient SQL queries using DML commands</li>
          <li>Use operators and functions to filter and transform data</li>
          <li>Design complex queries with joins and subqueries</li>
          <li>Create and manage database views and sequences</li>
          <li>Develop PL/SQL procedures and functions</li>
          <li>Implement triggers for automated database operations</li>
          <li>Use cursors to process multiple rows efficiently</li>
          <li>Debug and optimize SQL/PL-SQL code</li>
        </ul>
      </div>
    </div>
  );
}

export default IntroTopic;
