import React from 'react';

function JoinsTopic() {
  return (
    <div className="topic-content">
      <div className="content-header">
        <h2>Joins</h2>
        <p>Combining data from multiple tables - INNER, OUTER, CROSS, and SELF joins</p>
      </div>

      <div className="content-section">
        <h3>What is a Join?</h3>
        <p>
          A JOIN is used to combine rows from two or more tables based on a related column between them.
          The related column is typically a Primary Key in one table and a Foreign Key in another.
        </p>
      </div>

      <div className="content-section">
        <h3>INNER JOIN</h3>
        <p>Returns only the rows that have matching values in both tables.</p>

        <h4>Syntax:</h4>
        <div className="code-block">
<code>{`SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column = table2.column;`}</code>
        </div>

        <h4>Example:</h4>
        <div className="code-block">
<code>{`SELECT 
    e.employee_id,
    e.first_name,
    e.salary,
    d.department_name
FROM employees e
INNER JOIN departments d
ON e.department_id = d.department_id;`}</code>
        </div>

        <h4>Visual Representation:</h4>
        <p>
          INNER JOIN returns the intersection of two tables. Only rows with matching department_ids 
          appear in the result.
        </p>
      </div>

      <div className="content-section">
        <h3>LEFT JOIN (LEFT OUTER JOIN)</h3>
        <p>Returns all rows from the left table, and the matching rows from the right table.</p>

        <h4>Syntax:</h4>
        <div className="code-block">
<code>{`SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column = table2.column;`}</code>
        </div>

        <h4>Example:</h4>
        <div className="code-block">
<code>{`SELECT 
    e.employee_id,
    e.first_name,
    d.department_name
FROM employees e
LEFT JOIN departments d
ON e.department_id = d.department_id;`}</code>
        </div>

        <p>
          This query returns all employees, even those without a department assignment.
          Missing department information will show as NULL.
        </p>
      </div>

      <div className="content-section">
        <h3>RIGHT JOIN (RIGHT OUTER JOIN)</h3>
        <p>Returns all rows from the right table, and the matching rows from the left table.</p>

        <h4>Syntax:</h4>
        <div className="code-block">
<code>{`SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column = table2.column;`}</code>
        </div>

        <h4>Example:</h4>
        <div className="code-block">
<code>{`SELECT 
    e.employee_id,
    e.first_name,
    d.department_name
FROM employees e
RIGHT JOIN departments d
ON e.department_id = d.department_id;`}</code>
        </div>

        <p>
          This query returns all departments, even those without employees.
          Missing employee information will show as NULL.
        </p>
      </div>

      <div className="content-section">
        <h3>FULL OUTER JOIN</h3>
        <p>Returns all rows from both tables, including rows with NULL values.</p>

        <h4>Syntax:</h4>
        <div className="code-block">
<code>{`SELECT column_name(s)
FROM table1
FULL OUTER JOIN table2
ON table1.column = table2.column;`}</code>
        </div>

        <h4>Note:</h4>
        <p>
          FULL OUTER JOIN is not supported in all databases (e.g., MySQL).
          Use UNION to simulate it in MySQL.
        </p>
      </div>

      <div className="content-section">
        <h3>CROSS JOIN</h3>
        <p>Returns the Cartesian product of two tables (all possible combinations).</p>

        <h4>Syntax:</h4>
        <div className="code-block">
<code>{`SELECT column_name(s)
FROM table1
CROSS JOIN table2;`}</code>
        </div>

        <h4>Example:</h4>
        <div className="code-block">
<code>{`SELECT 
    e.first_name,
    p.project_name
FROM employees e
CROSS JOIN projects p;`}</code>
        </div>

        <p>
          If employees has 5 rows and projects has 3 rows, this returns 15 rows
          (every employee paired with every project).
        </p>
      </div>

      <div className="content-section">
        <h3>SELF JOIN</h3>
        <p>Joins a table to itself. Useful for comparing rows in the same table.</p>

        <h4>Example:</h4>
        <div className="code-block">
<code>{`SELECT 
    e1.first_name AS employee_name,
    e2.first_name AS manager_name
FROM employees e1
INNER JOIN employees e2
ON e1.manager_id = e2.employee_id;`}</code>
        </div>

        <p>
          This query finds each employee and their manager by joining the employees table to itself.
          e1 represents employees, e2 represents their managers.
        </p>
      </div>

      <div className="content-section">
        <h3>Multiple Joins</h3>
        <p>You can join more than two tables together.</p>

        <h4>Example:</h4>
        <div className="code-block">
<code>{`SELECT 
    e.first_name,
    d.department_name,
    l.city
FROM employees e
INNER JOIN departments d ON e.department_id = d.department_id
INNER JOIN locations l ON d.location_id = l.location_id;`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>Join Comparison Table</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Join Type</th>
                <th>Description</th>
                <th>Returns</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>INNER JOIN</td>
                <td>Matching rows only</td>
                <td>Intersection of both tables</td>
              </tr>
              <tr>
                <td>LEFT JOIN</td>
                <td>All left + matching right</td>
                <td>All left rows + matches from right</td>
              </tr>
              <tr>
                <td>RIGHT JOIN</td>
                <td>All right + matching left</td>
                <td>All right rows + matches from left</td>
              </tr>
              <tr>
                <td>FULL OUTER JOIN</td>
                <td>All rows from both</td>
                <td>Union of both tables</td>
              </tr>
              <tr>
                <td>CROSS JOIN</td>
                <td>All combinations</td>
                <td>Cartesian product</td>
              </tr>
              <tr>
                <td>SELF JOIN</td>
                <td>Table to itself</td>
                <td>Depends on join condition</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="exercise-container">
        <h4>✍️ Practice Exercises</h4>
        <ol style={{ marginLeft: '2rem' }}>
          <li>Write an INNER JOIN query to get employees and their department names</li>
          <li>Write a LEFT JOIN to show all employees, including those without a department</li>
          <li>Create a SELF JOIN to find each employee and their manager's name</li>
          <li>Write a query joining 3 tables: employees, departments, and locations</li>
          <li>Use a CROSS JOIN to get all possible combinations of employees and projects</li>
        </ol>
      </div>

      <div className="note-box">
        <strong>💡 Tip:</strong> Use table aliases (e.g., e, d) to make queries more readable,
        especially when joining multiple tables or doing self joins.
      </div>
    </div>
  );
}

export default JoinsTopic;
