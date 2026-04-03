import React from 'react';

function FunctionsTopic() {
  return (
    <div className="topic-content">
      <div className="content-header">
        <h2>Functions</h2>
        <p>String, Numeric, Date, and Aggregate functions in SQL</p>
      </div>

      <div className="content-section">
        <h3>String Functions</h3>
        <p>Functions that manipulate text data.</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Function</th>
                <th>Description</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>UPPER()</td>
                <td>Converts to uppercase</td>
                <td>UPPER('hello') → 'HELLO'</td>
              </tr>
              <tr>
                <td>LOWER()</td>
                <td>Converts to lowercase</td>
                <td>LOWER('HELLO') → 'hello'</td>
              </tr>
              <tr>
                <td>LENGTH()</td>
                <td>Returns string length</td>
                <td>LENGTH('hello') → 5</td>
              </tr>
              <tr>
                <td>SUBSTR()</td>
                <td>Extracts substring</td>
                <td>SUBSTR('hello', 1, 3) → 'hel'</td>
              </tr>
              <tr>
                <td>CONCAT()</td>
                <td>Joins strings</td>
                <td>CONCAT('John', ' ', 'Doe')</td>
              </tr>
              <tr>
                <td>TRIM()</td>
                <td>Removes spaces</td>
                <td>TRIM('  hello  ') → 'hello'</td>
              </tr>
              <tr>
                <td>REPLACE()</td>
                <td>Replaces characters</td>
                <td>REPLACE('hello', 'l', 'x')</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>Example:</h4>
        <div className="code-block">
<code>{`SELECT 
    UPPER(first_name) as first_name_upper,
    LOWER(last_name) as last_name_lower,
    CONCAT(first_name, ' ', last_name) as full_name,
    LENGTH(email) as email_length
FROM employees;`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>Numeric Functions</h3>
        <p>Functions that perform mathematical operations.</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Function</th>
                <th>Description</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ABS()</td>
                <td>Absolute value</td>
                <td>ABS(-10) → 10</td>
              </tr>
              <tr>
                <td>ROUND()</td>
                <td>Rounds to decimal places</td>
                <td>ROUND(10.567, 2) → 10.57</td>
              </tr>
              <tr>
                <td>CEIL()</td>
                <td>Rounds up</td>
                <td>CEIL(10.2) → 11</td>
              </tr>
              <tr>
                <td>FLOOR()</td>
                <td>Rounds down</td>
                <td>FLOOR(10.9) → 10</td>
              </tr>
              <tr>
                <td>MOD()</td>
                <td>Remainder</td>
                <td>MOD(10, 3) → 1</td>
              </tr>
              <tr>
                <td>POWER()</td>
                <td>Exponentiation</td>
                <td>POWER(2, 3) → 8</td>
              </tr>
              <tr>
                <td>SQRT()</td>
                <td>Square root</td>
                <td>SQRT(16) → 4</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>Example:</h4>
        <div className="code-block">
<code>{`SELECT 
    salary,
    ROUND(salary * 0.1, 2) as bonus_10_percent,
    CEIL(salary / 12) as monthly_salary_ceil,
    ABS(salary - 50000) as difference_from_50k
FROM employees;`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>Date Functions</h3>
        <p>Functions that work with date and time values.</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Function</th>
                <th>Description</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SYSDATE</td>
                <td>Current system date</td>
                <td>SELECT SYSDATE;</td>
              </tr>
              <tr>
                <td>CURRENT_DATE</td>
                <td>Current date</td>
                <td>SELECT CURRENT_DATE;</td>
              </tr>
              <tr>
                <td>MONTHS_BETWEEN()</td>
                <td>Months between dates</td>
                <td>MONTHS_BETWEEN(date1, date2)</td>
              </tr>
              <tr>
                <td>ADD_MONTHS()</td>
                <td>Add months to date</td>
                <td>ADD_MONTHS(date, 6)</td>
              </tr>
              <tr>
                <td>TO_DATE()</td>
                <td>Convert to date</td>
                <td>TO_DATE('2024-01-15', 'YYYY-MM-DD')</td>
              </tr>
              <tr>
                <td>TO_CHAR()</td>
                <td>Convert date to string</td>
                <td>TO_CHAR(date, 'DD/MM/YYYY')</td>
              </tr>
              <tr>
                <td>EXTRACT()</td>
                <td>Extract date parts</td>
                <td>EXTRACT(YEAR FROM date)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>Example:</h4>
        <div className="code-block">
<code>{`SELECT 
    first_name,
    hire_date,
    SYSDATE,
    MONTHS_BETWEEN(SYSDATE, hire_date) as months_employed,
    TO_CHAR(hire_date, 'DD/MM/YYYY') as formatted_date
FROM employees;`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>Aggregate Functions</h3>
        <p>Functions that work on groups of rows and return a single result.</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Function</th>
                <th>Description</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>COUNT()</td>
                <td>Counts rows</td>
                <td>COUNT(*) or COUNT(column)</td>
              </tr>
              <tr>
                <td>SUM()</td>
                <td>Sum of values</td>
                <td>SUM(salary)</td>
              </tr>
              <tr>
                <td>AVG()</td>
                <td>Average value</td>
                <td>AVG(salary)</td>
              </tr>
              <tr>
                <td>MAX()</td>
                <td>Maximum value</td>
                <td>MAX(salary)</td>
              </tr>
              <tr>
                <td>MIN()</td>
                <td>Minimum value</td>
                <td>MIN(salary)</td>
              </tr>
              <tr>
                <td>STDDEV()</td>
                <td>Standard deviation</td>
                <td>STDDEV(salary)</td>
              </tr>
              <tr>
                <td>VARIANCE()</td>
                <td>Variance</td>
                <td>VARIANCE(salary)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>Example:</h4>
        <div className="code-block">
<code>{`SELECT 
    COUNT(*) as total_employees,
    SUM(salary) as total_salary,
    AVG(salary) as average_salary,
    MAX(salary) as highest_salary,
    MIN(salary) as lowest_salary
FROM employees;`}</code>
        </div>

        <h4>With GROUP BY:</h4>
        <div className="code-block">
<code>{`SELECT 
    department_id,
    COUNT(*) as emp_count,
    AVG(salary) as avg_salary,
    MAX(salary) as max_salary
FROM employees
GROUP BY department_id;`}</code>
        </div>

        <h4>With HAVING:</h4>
        <div className="code-block">
<code>{`SELECT 
    department_id,
    COUNT(*) as emp_count,
    AVG(salary) as avg_salary
FROM employees
GROUP BY department_id
HAVING AVG(salary) > 50000;`}</code>
        </div>
      </div>

      <div className="exercise-container">
        <h4>✍️ Practice Exercises</h4>
        <ol style={{ marginLeft: '2rem' }}>
          <li>Get the full name of employees by concatenating first and last names in uppercase</li>
          <li>Find the maximum, minimum, and average salary across all employees</li>
          <li>Count the total number of employees and group by department</li>
          <li>Find departments where average salary is greater than 55000</li>
          <li>Calculate monthly salary (annual/12) rounded to 2 decimal places for all employees</li>
        </ol>
      </div>

      <div className="note-box">
        <strong>💡 Remember:</strong> Aggregate functions ignore NULL values.
        Use COALESCE() to provide default values for NULL data.
      </div>
    </div>
  );
}

export default FunctionsTopic;
