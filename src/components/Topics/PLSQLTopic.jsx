import React from 'react';

function PLSQLTopic() {
  return (
    <div className="topic-content">
      <div className="content-header">
        <h2>PL/SQL Basics</h2>
        <p>Procedural Language features, variables, and control structures</p>
      </div>

      <div className="content-section">
        <h3>What is PL/SQL?</h3>
        <p>
          PL/SQL (Procedural Language/SQL) is Oracle's extension to SQL.
          It allows you to write procedural code directly in the database using SQL.
          PL/SQL supports variables, control structures, loops, and error handling.
        </p>
      </div>

      <div className="content-section">
        <h3>PL/SQL Block Structure</h3>
        <p>Every PL/SQL block has three main sections:</p>

        <div className="code-block">
<code>{`DECLARE
    -- Variable declarations
    variable_name datatype;
    
BEGIN
    -- Executable statements
    SQL statements
    
EXCEPTION
    -- Exception handling
    WHEN exception_type THEN
        -- Error handling code
END;
/`}</code>
        </div>

        <h4>Explanation:</h4>
        <ul style={{ marginLeft: '2rem' }}>
          <li><strong>DECLARE:</strong> Optional section for variable declarations</li>
          <li><strong>BEGIN:</strong> Mandatory section containing executable code</li>
          <li><strong>EXCEPTION:</strong> Optional section for error handling</li>
          <li><strong>END:</strong> Ends the block (must be followed by /)</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>Variables</h3>

        <h4>Declaration Syntax:</h4>
        <div className="code-block">
<code>{`variable_name datatype [NOT NULL] [:= initial_value];`}</code>
        </div>

        <h4>Example:</h4>
        <div className="code-block">
<code>{`DECLARE
    emp_id NUMBER := 1001;
    emp_name VARCHAR2(50);
    salary NUMBER(10, 2) := 50000;
    hire_date DATE;
    is_active BOOLEAN := TRUE;
BEGIN
    -- Use variables here
    DBMS_OUTPUT.PUT_LINE('Employee ID: ' || emp_id);
END;
/`}</code>
        </div>

        <h4>Common Data Types:</h4>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Data Type</th>
                <th>Description</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>NUMBER</td>
                <td>Numeric values</td>
                <td>NUMBER(10, 2)</td>
              </tr>
              <tr>
                <td>VARCHAR2</td>
                <td>Variable-length text</td>
                <td>VARCHAR2(50)</td>
              </tr>
              <tr>
                <td>DATE</td>
                <td>Date values</td>
                <td>DATE</td>
              </tr>
              <tr>
                <td>BOOLEAN</td>
                <td>TRUE/FALSE/NULL</td>
                <td>BOOLEAN</td>
              </tr>
              <tr>
                <td>CHAR</td>
                <td>Fixed-length text</td>
                <td>CHAR(10)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="content-section">
        <h3>Control Structures</h3>

        <h4>IF-THEN-ELSE:</h4>
        <div className="code-block">
<code>{`DECLARE
    salary NUMBER := 60000;
BEGIN
    IF salary > 50000 THEN
        DBMS_OUTPUT.PUT_LINE('High salary');
    ELSIF salary > 30000 THEN
        DBMS_OUTPUT.PUT_LINE('Medium salary');
    ELSE
        DBMS_OUTPUT.PUT_LINE('Low salary');
    END IF;
END;
/`}</code>
        </div>

        <h4>CASE Statement:</h4>
        <div className="code-block">
<code>{`DECLARE
    grade CHAR(1) := 'A';
    message VARCHAR2(20);
BEGIN
    CASE grade
        WHEN 'A' THEN message := 'Excellent';
        WHEN 'B' THEN message := 'Good';
        WHEN 'C' THEN message := 'Average';
        ELSE message := 'Fail';
    END CASE;
    DBMS_OUTPUT.PUT_LINE(message);
END;
/`}</code>
        </div>

        <h4>LOOP (Simple):</h4>
        <div className="code-block">
<code>{`DECLARE
    counter NUMBER := 1;
BEGIN
    LOOP
        DBMS_OUTPUT.PUT_LINE(counter);
        counter := counter + 1;
        EXIT WHEN counter > 5;
    END LOOP;
END;
/`}</code>
        </div>

        <h4>WHILE LOOP:</h4>
        <div className="code-block">
<code>{`DECLARE
    counter NUMBER := 1;
BEGIN
    WHILE counter <= 5 LOOP
        DBMS_OUTPUT.PUT_LINE(counter);
        counter := counter + 1;
    END WHILE;
END;
/`}</code>
        </div>

        <h4>FOR LOOP:</h4>
        <div className="code-block">
<code>{`BEGIN
    FOR counter IN 1..5 LOOP
        DBMS_OUTPUT.PUT_LINE(counter);
    END LOOP;
END;
/`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>Output in PL/SQL</h3>

        <h4>DBMS_OUTPUT.PUT_LINE:</h4>
        <div className="code-block">
<code>{`BEGIN
    DBMS_OUTPUT.PUT_LINE('Hello from PL/SQL');
    DBMS_OUTPUT.PUT_LINE('Value: ' || 100);
END;
/`}</code>
        </div>

        <h4>How to enable output (in SQL*Plus):</h4>
        <div className="code-block">
<code>{`SET SERVEROUTPUT ON SIZE UNLIMITED;`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>SQL in PL/SQL</h3>

        <h4>SELECT INTO:</h4>
        <div className="code-block">
<code>{`DECLARE
    v_salary NUMBER;
    v_emp_name VARCHAR2(50);
BEGIN
    SELECT salary, first_name
    INTO v_salary, v_emp_name
    FROM employees
    WHERE employee_id = 1001;
    
    DBMS_OUTPUT.PUT_LINE('Name: ' || v_emp_name);
    DBMS_OUTPUT.PUT_LINE('Salary: ' || v_salary);
END;
/`}</code>
        </div>

        <h4>INSERT/UPDATE/DELETE:</h4>
        <div className="code-block">
<code>{`BEGIN
    INSERT INTO employees (emp_id, first_name, salary)
    VALUES (1002, 'Jane Doe', 55000);
    
    UPDATE employees
    SET salary = 60000
    WHERE emp_id = 1001;
    
    DELETE FROM employees
    WHERE emp_id = 1002;
    
    COMMIT;
END;
/`}</code>
        </div>
      </div>

      <div className="exercise-container">
        <h4>✍️ Practice Exercises</h4>
        <ol style={{ marginLeft: '2rem' }}>
          <li>Write a PL/SQL block to declare three variables and print them</li>
          <li>Create a PL/SQL block using IF-THEN-ELSE to check if salary is greater than 50000</li>
          <li>Write a FOR LOOP that prints numbers 1 to 10</li>
          <li>Use SELECT INTO to fetch an employee's name and salary based on ID</li>
          <li>Create a CASE statement that converts numeric grades (1-5) to letter grades (A-F)</li>
        </ol>
      </div>

      <div className="note-box">
        <strong>💡 Remember:</strong> All PL/SQL blocks must end with / on a new line in SQL*Plus.
        Enable output with SET SERVEROUTPUT ON; before running DBMS_OUTPUT statements.
      </div>
    </div>
  );
}

export default PLSQLTopic;
