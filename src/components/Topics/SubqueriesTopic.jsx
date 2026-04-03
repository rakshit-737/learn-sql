import React from 'react';

function SubqueriesTopic() {
  return (
    <div className="topic-content">
      <div className="content-header">
        <h2>📊 Subqueries & Views</h2>
        <p>Nested queries and virtual tables for advanced data retrieval</p>
      </div>

      <div className="content-section">
        <h3>What are Subqueries?</h3>
        <p>
          A subquery (also called inner query) is a query within another SQL query.
          The subquery returns data for the main query to use.
        </p>
        <p><strong>Types:</strong></p>
        <ul style={{ marginLeft: '2rem' }}>
          <li><strong>Scalar Subquery:</strong> Returns a single value</li>
          <li><strong>Row Subquery:</strong> Returns a single row</li>
          <li><strong>Table Subquery:</strong> Returns multiple rows/columns</li>
          <li><strong>Correlated Subquery:</strong> References columns from outer query</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>Subquery in WHERE Clause</h3>
        <p>Use subqueries to filter results based on conditions.</p>

        <h4>Example 1: Find employees earning more than average</h4>
        <div className="code-block">
<code>{`SELECT first_name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);`}</code>
        </div>

        <h4>Example 2: Find employees in specific departments</h4>
        <div className="code-block">
<code>{`SELECT first_name, department_id
FROM employees
WHERE department_id IN 
    (SELECT department_id FROM departments 
     WHERE location_id = 100);`}</code>
        </div>

        <h4>Example 3: Using EXISTS</h4>
        <div className="code-block">
<code>{`SELECT first_name
FROM employees e
WHERE EXISTS 
    (SELECT 1 FROM projects p 
     WHERE p.employee_id = e.employee_id);`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>Subquery in FROM Clause</h3>
        <p>Use subqueries to create derived tables.</p>

        <h4>Example:</h4>
        <div className="code-block">
<code>{`SELECT department_id, avg_salary
FROM (SELECT department_id, AVG(salary) as avg_salary
      FROM employees
      GROUP BY department_id)
WHERE avg_salary > 50000;`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>Subquery in SELECT Clause</h3>
        <p>Use subqueries to calculate values for each row.</p>

        <h4>Example:</h4>
        <div className="code-block">
<code>{`SELECT 
    first_name,
    salary,
    (SELECT AVG(salary) FROM employees) as avg_salary,
    salary - (SELECT AVG(salary) FROM employees) as diff_from_avg
FROM employees;`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>Correlated Subqueries</h3>
        <p>Subqueries that reference columns from the outer query.</p>

        <h4>Example: Find departments with employees earning more than department average</h4>
        <div className="code-block">
<code>{`SELECT e.first_name, e.salary, e.department_id
FROM employees e
WHERE e.salary > (SELECT AVG(salary) 
                  FROM employees 
                  WHERE department_id = e.department_id);`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>What are Views?</h3>
        <p>
          A view is a virtual table based on a SELECT query.
          It can simplify complex queries and provide data security by showing only needed columns.
        </p>
      </div>

      <div className="content-section">
        <h3>Creating Views</h3>

        <h4>Syntax:</h4>
        <div className="code-block">
<code>{`CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;`}</code>
        </div>

        <h4>Example 1: Simple View</h4>
        <div className="code-block">
<code>{`CREATE VIEW employee_salaries AS
SELECT first_name, last_name, salary, department_id
FROM employees
WHERE salary > 50000;`}</code>
        </div>

        <h4>Example 2: View with Aggregate Functions</h4>
        <div className="code-block">
<code>{`CREATE VIEW dept_salary_summary AS
SELECT 
    department_id,
    COUNT(*) as emp_count,
    AVG(salary) as avg_salary,
    MAX(salary) as max_salary,
    MIN(salary) as min_salary
FROM employees
GROUP BY department_id;`}</code>
        </div>

        <h4>Example 3: View with Join</h4>
        <div className="code-block">
<code>{`CREATE VIEW emp_dept_view AS
SELECT 
    e.employee_id,
    e.first_name,
    d.department_name,
    e.salary
FROM employees e
INNER JOIN departments d
ON e.department_id = d.department_id;`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>Using Views</h3>

        <h4>Query a View:</h4>
        <div className="code-block">
<code>{`SELECT * FROM emp_dept_view
WHERE salary > 60000;`}</code>
        </div>

        <h4>Drop a View:</h4>
        <div className="code-block">
<code>{`DROP VIEW view_name;`}</code>
        </div>

        <h4>Or with CASCADE (drops dependent objects):</h4>
        <div className="code-block">
<code>{`DROP VIEW emp_dept_view CASCADE;`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>Advantages of Views</h3>
        <ul style={{ marginLeft: '2rem' }}>
          <li>Simplify complex queries</li>
          <li>Provide security by restricting column access</li>
          <li>Improve query readability</li>
          <li>Enable modular query design</li>
          <li>Can improve performance with materialized views</li>
        </ul>
      </div>

      <div className="exercise-container">
        <h4>✍️ Practice Exercises</h4>
        <ol style={{ marginLeft: '2rem' }}>
          <li>Write a subquery to find employees earning more than the average salary</li>
          <li>Create a view showing employee names and department names together</li>
          <li>Use a correlated subquery to find employees earning above their department average</li>
          <li>Create a view with aggregate data: dept, emp count, and average salary</li>
          <li>Write a subquery in FROM clause to get departments with more than 5 employees</li>
        </ol>
      </div>

      <div className="note-box">
        <strong>⚠️ Important:</strong> Correlated subqueries execute once for each row in the outer query,
        so they can be slower than JOINs. Use JOINs when possible, especially for large datasets.
      </div>
    </div>
  );
}

export default SubqueriesTopic;
