import React from 'react';

function ProceduresTopic() {
  return (
    <div className="topic-content">
      <div className="content-header">
        <h2>Procedures &amp; Functions</h2>
        <p>Creating and using reusable PL/SQL code blocks</p>
      </div>

      <div className="content-section">
        <h3>What are Procedures?</h3>
        <p>
          A procedure is a named PL/SQL block that performs specific tasks.
          Procedures can accept parameters, but don't return a value.
          They're executed using CALL or within other blocks.
        </p>
      </div>

      <div className="content-section">
        <h3>Creating Procedures</h3>

        <h4>Syntax:</h4>
        <div className="code-block">
<code>{`CREATE [OR REPLACE] PROCEDURE procedure_name
    (parameter1 IN/OUT datatype, parameter2 IN datatype, ...)
IS
BEGIN
    -- Procedure body
END procedure_name;
/`}</code>
        </div>

        <h4>Example 1: Simple Procedure</h4>
        <div className="code-block">
<code>{`CREATE OR REPLACE PROCEDURE greet_employee (
    p_emp_id IN NUMBER
)
IS
    v_name VARCHAR2(50);
BEGIN
    SELECT first_name INTO v_name
    FROM employees
    WHERE employee_id = p_emp_id;
    
    DBMS_OUTPUT.PUT_LINE('Hello, ' || v_name);
END greet_employee;
/`}</code>
        </div>

        <h4>Example 2: Procedure with Multiple Parameters</h4>
        <div className="code-block">
<code>{`CREATE OR REPLACE PROCEDURE update_salary (
    p_emp_id IN NUMBER,
    p_new_salary IN NUMBER
)
IS
BEGIN
    UPDATE employees
    SET salary = p_new_salary
    WHERE employee_id = p_emp_id;
    
    DBMS_OUTPUT.PUT_LINE('Salary updated successfully');
    COMMIT;
END update_salary;
/`}</code>
        </div>

        <h4>Example 3: Procedure with OUT Parameter</h4>
        <div className="code-block">
<code>{`CREATE OR REPLACE PROCEDURE get_employee_info (
    p_emp_id IN NUMBER,
    p_name OUT VARCHAR2,
    p_salary OUT NUMBER
)
IS
BEGIN
    SELECT first_name, salary
    INTO p_name, p_salary
    FROM employees
    WHERE employee_id = p_emp_id;
END get_employee_info;
/`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>Executing Procedures</h3>

        <h4>Method 1: Using CALL (SQL*Plus)</h4>
        <div className="code-block">
<code>{`CALL greet_employee(1001);`}</code>
        </div>

        <h4>Method 2: Within PL/SQL Block</h4>
        <div className="code-block">
<code>{`BEGIN
    greet_employee(1001);
END;
/`}</code>
        </div>

        <h4>Method 3: With OUT Parameters</h4>
        <div className="code-block">
<code>{`DECLARE
    v_name VARCHAR2(50);
    v_salary NUMBER;
BEGIN
    get_employee_info(1001, v_name, v_salary);
    DBMS_OUTPUT.PUT_LINE('Name: ' || v_name);
    DBMS_OUTPUT.PUT_LINE('Salary: ' || v_salary);
END;
/`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>What are Functions?</h3>
        <p>
          A function is similar to a procedure but ALWAYS returns a single value.
          Functions can be used in SQL queries.
        </p>
      </div>

      <div className="content-section">
        <h3>Creating Functions</h3>

        <h4>Syntax:</h4>
        <div className="code-block">
<code>{`CREATE [OR REPLACE] FUNCTION function_name
    (parameter1 IN/OUT datatype, ...)
RETURN return_datatype
IS
BEGIN
    -- Function body
    RETURN value;
END function_name;
/`}</code>
        </div>

        <h4>Example 1: Simple Function</h4>
        <div className="code-block">
<code>{`CREATE OR REPLACE FUNCTION calculate_annual_salary (
    p_monthly_salary IN NUMBER
)
RETURN NUMBER
IS
BEGIN
    RETURN p_monthly_salary * 12;
END calculate_annual_salary;
/`}</code>
        </div>

        <h4>Example 2: Function with Logic</h4>
        <div className="code-block">
<code>{`CREATE OR REPLACE FUNCTION is_high_earner (
    p_emp_id IN NUMBER
)
RETURN VARCHAR2
IS
    v_salary NUMBER;
    v_avg_salary NUMBER;
BEGIN
    SELECT salary INTO v_salary FROM employees WHERE employee_id = p_emp_id;
    SELECT AVG(salary) INTO v_avg_salary FROM employees;
    
    IF v_salary > v_avg_salary THEN
        RETURN 'Yes';
    ELSE
        RETURN 'No';
    END IF;
END is_high_earner;
/`}</code>
        </div>

        <h4>Example 3: Function with Multiple Parameters</h4>
        <div className="code-block">
<code>{`CREATE OR REPLACE FUNCTION get_bonus (
    p_salary IN NUMBER,
    p_bonus_percent IN NUMBER
)
RETURN NUMBER
IS
BEGIN
    RETURN p_salary * (p_bonus_percent / 100);
END get_bonus;
/`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>Using Functions</h3>

        <h4>In PL/SQL Block:</h4>
        <div className="code-block">
<code>{`DECLARE
    v_annual_salary NUMBER;
BEGIN
    v_annual_salary := calculate_annual_salary(5000);
    DBMS_OUTPUT.PUT_LINE('Annual Salary: ' || v_annual_salary);
END;
/`}</code>
        </div>

        <h4>In SQL Query:</h4>
        <div className="code-block">
<code>{`SELECT 
    first_name,
    salary,
    calculate_annual_salary(salary) as annual_salary,
    is_high_earner(employee_id) as high_earner
FROM employees;`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>Parameter Modes</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Mode</th>
                <th>Direction</th>
                <th>Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IN</td>
                <td>Input only</td>
                <td>Pass value to procedure/function</td>
              </tr>
              <tr>
                <td>OUT</td>
                <td>Output only</td>
                <td>Return value from procedure</td>
              </tr>
              <tr>
                <td>IN OUT</td>
                <td>Both input and output</td>
                <td>Pass and receive values</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="content-section">
        <h3>Managing Stored Objects</h3>

        <h4>Viewing Objects:</h4>
        <div className="code-block">
<code>{`-- View all stored procedures
SELECT * FROM USER_PROCEDURES WHERE OBJECT_TYPE = 'PROCEDURE';

-- View procedure/function source code
SELECT TEXT FROM USER_SOURCE
WHERE NAME = 'procedure_name'
ORDER BY LINE;`}</code>
        </div>

        <h4>Dropping Objects:</h4>
        <div className="code-block">
<code>{`DROP PROCEDURE procedure_name;
DROP FUNCTION function_name;`}</code>
        </div>
      </div>

      <div className="exercise-container">
        <h4>✍️ Practice Exercises</h4>
        <ol style={{ marginLeft: '2rem' }}>
          <li>Create a procedure that accepts an employee ID and prints their name and salary</li>
          <li>Create a function that calculates annual salary given monthly salary</li>
          <li>Create a procedure with IN and OUT parameters to get employee details</li>
          <li>Create a function that determines if an employee is a high earner (above avg)</li>
          <li>Use a created function in a SELECT query to calculate bonuses for all employees</li>
        </ol>
      </div>

      <div className="note-box">
        <strong>💡 Tip:</strong> Use CREATE OR REPLACE to modify existing procedures/functions
        without having to drop and recreate them.
      </div>
    </div>
  );
}

export default ProceduresTopic;
