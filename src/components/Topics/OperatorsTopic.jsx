import React from 'react';

function OperatorsTopic() {
  return (
    <div className="topic-content">
      <div className="content-header">
        <h2>⚙️ Operators</h2>
        <p>Comparison, Logical, and Arithmetic operators in SQL</p>
      </div>

      <div className="content-section">
        <h3>Comparison Operators</h3>
        <p>Comparison operators are used in WHERE clauses to compare values.</p>
        
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Operator</th>
                <th>Description</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>=</td>
                <td>Equal to</td>
                <td>WHERE age = 25</td>
              </tr>
              <tr>
                <td>!=, &lt;&gt;</td>
                <td>Not equal to</td>
                <td>WHERE age != 25</td>
              </tr>
              <tr>
                <td>&gt;</td>
                <td>Greater than</td>
                <td>WHERE age &gt; 25</td>
              </tr>
              <tr>
                <td>&lt;</td>
                <td>Less than</td>
                <td>WHERE age &lt; 25</td>
              </tr>
              <tr>
                <td>&gt;=</td>
                <td>Greater than or equal to</td>
                <td>WHERE age &gt;= 25</td>
              </tr>
              <tr>
                <td>&lt;=</td>
                <td>Less than or equal to</td>
                <td>WHERE age &lt;= 25</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="content-section">
        <h3>Logical Operators</h3>
        <p>Logical operators combine multiple conditions in a WHERE clause.</p>

        <h4>AND Operator</h4>
        <p>Returns TRUE if all conditions are satisfied.</p>
        <div className="code-block">
<code>{`SELECT * FROM employees
WHERE age > 25 AND department = 'IT';`}</code>
        </div>

        <h4>OR Operator</h4>
        <p>Returns TRUE if any condition is satisfied.</p>
        <div className="code-block">
<code>{`SELECT * FROM employees
WHERE department = 'IT' OR department = 'HR';`}</code>
        </div>

        <h4>NOT Operator</h4>
        <p>Reverses the condition.</p>
        <div className="code-block">
<code>{`SELECT * FROM employees
WHERE NOT department = 'IT';`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>Special Operators</h3>

        <h4>IN Operator</h4>
        <p>Checks if a value exists in a list.</p>
        <div className="code-block">
<code>{`SELECT * FROM employees
WHERE department IN ('IT', 'HR', 'Sales');`}</code>
        </div>

        <h4>BETWEEN Operator</h4>
        <p>Selects values within a range.</p>
        <div className="code-block">
<code>{`SELECT * FROM employees
WHERE salary BETWEEN 30000 AND 70000;`}</code>
        </div>

        <h4>LIKE Operator</h4>
        <p>Searches for a pattern in text.</p>
        <div className="code-block">
<code>{`SELECT * FROM employees
WHERE first_name LIKE 'J%';  -- Names starting with J
WHERE last_name LIKE '%son'; -- Names ending with 'son'
WHERE email LIKE '%@%.com'; -- Email pattern`}</code>
        </div>

        <h4>LIKE Wildcards</h4>
        <ul style={{ marginLeft: '2rem' }}>
          <li><strong>%</strong> - Zero or more characters</li>
          <li><strong>_</strong> - Exactly one character</li>
        </ul>

        <h4>IS NULL / IS NOT NULL</h4>
        <p>Checks for NULL values.</p>
        <div className="code-block">
<code>{`SELECT * FROM employees
WHERE phone_number IS NULL;  -- Missing phone numbers

SELECT * FROM employees
WHERE phone_number IS NOT NULL;  -- Has phone numbers`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>Arithmetic Operators</h3>
        <p>Arithmetic operators perform mathematical operations.</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Operator</th>
                <th>Description</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>+</td>
                <td>Addition</td>
                <td>salary + bonus</td>
              </tr>
              <tr>
                <td>-</td>
                <td>Subtraction</td>
                <td>total_amount - tax</td>
              </tr>
              <tr>
                <td>*</td>
                <td>Multiplication</td>
                <td>price * quantity</td>
              </tr>
              <tr>
                <td>/</td>
                <td>Division</td>
                <td>total / 12</td>
              </tr>
              <tr>
                <td>MOD</td>
                <td>Modulus (remainder)</td>
                <td>id MOD 2</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>Example:</h4>
        <div className="code-block">
<code>{`SELECT 
    first_name,
    salary,
    salary * 12 as annual_salary,
    salary * 1.1 as increased_salary
FROM employees;`}</code>
        </div>
      </div>

      <div className="exercise-container">
        <h4>✍️ Practice Exercises</h4>
        <ol style={{ marginLeft: '2rem' }}>
          <li>Write a query to find employees with salary greater than 50000 AND department = 'IT'</li>
          <li>Find employees whose name starts with 'A' using LIKE operator</li>
          <li>List all employees in departments 'HR', 'IT', or 'Sales' using IN operator</li>
          <li>Find employees with salary between 40000 and 70000</li>
          <li>Calculate annual salary (monthly * 12) for all employees where salary is not NULL</li>
        </ol>
      </div>
    </div>
  );
}

export default OperatorsTopic;
