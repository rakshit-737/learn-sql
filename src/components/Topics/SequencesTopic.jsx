import React from 'react';

function SequencesTopic() {
  return (
    <div className="topic-content">
      <div className="content-header">
        <h2>🔢 Sequences & Synonyms</h2>
        <p>Auto-generating sequential numbers and creating table aliases</p>
      </div>

      <div className="content-section">
        <h3>What are Sequences?</h3>
        <p>
          A sequence is a database object that generates unique, sequential numbers.
          Sequences are commonly used to generate primary key values automatically.
        </p>
      </div>

      <div className="content-section">
        <h3>Creating Sequences</h3>

        <h4>Syntax:</h4>
        <div className="code-block">
<code>{`CREATE SEQUENCE sequence_name
    START WITH 1
    INCREMENT BY 1
    MAXVALUE 999999
    MINVALUE 1
    NOCYCLE;`}</code>
        </div>

        <h4>Simple Example:</h4>
        <div className="code-block">
<code>{`CREATE SEQUENCE emp_seq
    START WITH 1001
    INCREMENT BY 1
    MAXVALUE 9999
    NOCYCLE;`}</code>
        </div>

        <h4>Parameters:</h4>
        <ul style={{ marginLeft: '2rem' }}>
          <li><strong>START WITH:</strong> Initial value for the sequence</li>
          <li><strong>INCREMENT BY:</strong> Increment between numbers (default 1)</li>
          <li><strong>MAXVALUE:</strong> Maximum value the sequence can reach</li>
          <li><strong>MINVALUE:</strong> Minimum value (default 1)</li>
          <li><strong>CYCLE/NOCYCLE:</strong> Whether to restart after MAXVALUE (default NOCYCLE)</li>
          <li><strong>CACHE:</strong> Number of values to pre-generate in memory</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>Using Sequences</h3>

        <h4>Accessing Sequence Values:</h4>
        <div className="code-block">
<code>{`-- Get next value
SELECT emp_seq.NEXTVAL FROM DUAL;

-- Get current value
SELECT emp_seq.CURRVAL FROM DUAL;`}</code>
        </div>

        <h4>Using in INSERT:</h4>
        <div className="code-block">
<code>{`INSERT INTO employees (employee_id, first_name, last_name, salary)
VALUES (emp_seq.NEXTVAL, 'John', 'Doe', 50000);`}</code>
        </div>

        <h4>Using in UPDATE:</h4>
        <div className="code-block">
<code>{`UPDATE employees
SET employee_id = emp_seq.NEXTVAL
WHERE employee_id IS NULL;`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>Modifying Sequences</h3>

        <h4>Alter Sequence:</h4>
        <div className="code-block">
<code>{`ALTER SEQUENCE emp_seq
    MAXVALUE 99999
    INCREMENT BY 2;`}</code>
        </div>

        <h4>Drop Sequence:</h4>
        <div className="code-block">
<code>{`DROP SEQUENCE emp_seq;`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>What are Synonyms?</h3>
        <p>
          A synonym is an alias or alternative name for a database object (table, view, sequence, etc.).
          Synonyms simplify queries and provide an abstraction layer.
        </p>
      </div>

      <div className="content-section">
        <h3>Creating Synonyms</h3>

        <h4>Syntax:</h4>
        <div className="code-block">
<code>{`CREATE [PUBLIC] SYNONYM synonym_name
FOR schema.object_name;`}</code>
        </div>

        <h4>Example 1: Private Synonym</h4>
        <div className="code-block">
<code>{`CREATE SYNONYM emp FOR employees;

-- Now you can query
SELECT * FROM emp;`}</code>
        </div>

        <h4>Example 2: Public Synonym (accessible to all users)</h4>
        <div className="code-block">
<code>{`CREATE PUBLIC SYNONYM emp FOR hr.employees;`}</code>
        </div>

        <h4>Example 3: Synonym for a View</h4>
        <div className="code-block">
<code>{`CREATE SYNONYM emp_view FOR employee_salary_view;`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>Using Synonyms</h3>

        <h4>Query using synonym (same as original object):</h4>
        <div className="code-block">
<code>{`SELECT first_name, salary FROM emp
WHERE salary > 50000;`}</code>
        </div>

        <h4>Drop Synonym:</h4>
        <div className="code-block">
<code>{`DROP SYNONYM emp;

-- Or with force (even if dependent objects exist)
DROP PUBLIC SYNONYM emp FORCE;`}</code>
        </div>

        <h4>View Synonyms:</h4>
        <div className="code-block">
<code>{`-- View all synonyms
SELECT * FROM USER_SYNONYMS;

-- View all public synonyms
SELECT * FROM ALL_SYNONYMS
WHERE OWNER = 'PUBLIC';`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>Advantages of Sequences</h3>
        <ul style={{ marginLeft: '2rem' }}>
          <li>Automatically generate unique key values</li>
          <li>Reduce application logic for ID generation</li>
          <li>Ensure no duplicate primary keys</li>
          <li>Control number generation with INCREMENT and CACHE</li>
          <li>More efficient than manual ID management</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>Advantages of Synonyms</h3>
        <ul style={{ marginLeft: '2rem' }}>
          <li>Simplify object references</li>
          <li>Hide schema names from users</li>
          <li>Make queries more readable</li>
          <li>Allow easier object migration</li>
          <li>Provide a single name for frequently used objects</li>
        </ul>
      </div>

      <div className="exercise-container">
        <h4>✍️ Practice Exercises</h4>
        <ol style={{ marginLeft: '2rem' }}>
          <li>Create a sequence starting at 1000 with increment of 1</li>
          <li>Write an INSERT query using NEXTVAL to add a new employee</li>
          <li>Create a synonym 'emp' for the employees table</li>
          <li>Query the synonyms data dictionary to list all synonyms</li>
          <li>Alter a sequence to change its maximum value</li>
        </ol>
      </div>

      <div className="note-box">
        <strong>💡 Best Practice:</strong> Use sequences with triggers to automatically
        generate primary keys when data is inserted.
      </div>
    </div>
  );
}

export default SequencesTopic;
