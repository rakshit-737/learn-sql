import React from 'react';

function DMLTopic() {
  return (
    <div className="topic-content">
      <div className="content-header">
        <h2>📝 DML Commands</h2>
        <p>Data Manipulation Language - INSERT, UPDATE, DELETE, and SELECT operations</p>
      </div>

      <div className="content-section">
        <h3>What is DML?</h3>
        <p>
          DML (Data Manipulation Language) is a subset of SQL that allows you to manage data within the database.
          The four main DML commands are:
        </p>
        <ul style={{ marginLeft: '2rem' }}>
          <li><strong>SELECT:</strong> Retrieve data from one or more tables</li>
          <li><strong>INSERT:</strong> Add new rows to a table</li>
          <li><strong>UPDATE:</strong> Modify existing data in a table</li>
          <li><strong>DELETE:</strong> Remove rows from a table</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>SELECT Statement</h3>
        <p>The SELECT statement is used to retrieve data from a database.</p>
        
        <h4>Syntax:</h4>
        <div className="code-block">
<code>{`SELECT column1, column2, ...
FROM table_name
WHERE condition;`}</code>
        </div>

        <h4>Example:</h4>
        <div className="code-block">
<code>{`SELECT employee_id, first_name, salary
FROM employees
WHERE department_id = 10;`}</code>
        </div>

        <h4>Key Points:</h4>
        <ul style={{ marginLeft: '2rem' }}>
          <li>* selects all columns</li>
          <li>WHERE clause filters results</li>
          <li>ORDER BY sorts results</li>
          <li>LIMIT restricts number of rows</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>INSERT Statement</h3>
        <p>The INSERT statement adds new rows to a table.</p>
        
        <h4>Syntax:</h4>
        <div className="code-block">
<code>{`INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);`}</code>
        </div>

        <h4>Example:</h4>
        <div className="code-block">
<code>{`INSERT INTO employees (employee_id, first_name, last_name, salary, department_id)
VALUES (1001, 'John', 'Doe', 50000, 10);`}</code>
        </div>

        <h4>Key Points:</h4>
        <ul style={{ marginLeft: '2rem' }}>
          <li>Column order must match value order</li>
          <li>All NOT NULL columns must have values</li>
          <li>You can insert multiple rows at once</li>
          <li>Use INSERT INTO SELECT to copy data from another table</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>UPDATE Statement</h3>
        <p>The UPDATE statement modifies existing data in a table.</p>
        
        <h4>Syntax:</h4>
        <div className="code-block">
<code>{`UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;`}</code>
        </div>

        <h4>Example:</h4>
        <div className="code-block">
<code>{`UPDATE employees
SET salary = 55000, department_id = 20
WHERE employee_id = 1001;`}</code>
        </div>

        <h4>Key Points:</h4>
        <ul style={{ marginLeft: '2rem' }}>
          <li>Always use WHERE to specify which rows to update</li>
          <li>Omitting WHERE will update all rows</li>
          <li>You can update multiple columns at once</li>
          <li>Use expressions for calculated updates</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>DELETE Statement</h3>
        <p>The DELETE statement removes rows from a table.</p>
        
        <h4>Syntax:</h4>
        <div className="code-block">
<code>{`DELETE FROM table_name
WHERE condition;`}</code>
        </div>

        <h4>Example:</h4>
        <div className="code-block">
<code>{`DELETE FROM employees
WHERE employee_id = 1001;`}</code>
        </div>

        <h4>Key Points:</h4>
        <ul style={{ marginLeft: '2rem' }}>
          <li>Always use WHERE to specify which rows to delete</li>
          <li>Omitting WHERE will delete all rows</li>
          <li>DELETE removes rows, not the table structure</li>
          <li>Use ROLLBACK to undo DELETE if not committed</li>
        </ul>
      </div>

      <div className="exercise-container">
        <h4>✍️ Practice Exercises</h4>
        <ol style={{ marginLeft: '2rem' }}>
          <li>Write a SELECT query to find all employees with salary greater than 50000</li>
          <li>Insert a new employee with ID 1002, name 'Jane Smith', and salary 60000</li>
          <li>Update the salary of employee 1002 to 65000</li>
          <li>Delete the employee with ID 1002</li>
          <li>Write a query to display all employees sorted by salary in descending order</li>
        </ol>
      </div>

      <div className="note-box">
        <strong>⚠️ Important:</strong> Always be careful with UPDATE and DELETE statements.
        Test your WHERE condition with a SELECT first to ensure you're affecting the right rows.
      </div>
    </div>
  );
}

export default DMLTopic;
