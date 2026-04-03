import React from 'react';

function TriggersTopic() {
  return (
    <div className="topic-content">
      <div className="content-header">
        <h2>Triggers &amp; Cursors</h2>
        <p>Event-driven programming and row-by-row data processing</p>
      </div>

      <div className="content-section">
        <h3>What are Triggers?</h3>
        <p>
          A trigger is a special PL/SQL block that automatically executes 
          (or "fires") in response to specific events on tables or views in the database.
          Triggers enforce business rules automatically.
        </p>
      </div>

      <div className="content-section">
        <h3>Creating Triggers</h3>

        <h4>Syntax:</h4>
        <div className="code-block">
<code>{`CREATE [OR REPLACE] TRIGGER trigger_name
BEFORE/AFTER INSERT/UPDATE/DELETE ON table_name
[FOR EACH ROW]
[WHEN condition]
BEGIN
    -- Trigger body
END trigger_name;
/`}</code>
        </div>

        <h4>Trigger Timing:</h4>
        <ul style={{ marginLeft: '2rem' }}>
          <li><strong>BEFORE:</strong> Executes before the triggering event</li>
          <li><strong>AFTER:</strong> Executes after the triggering event</li>
        </ul>

        <h4>Trigger Events:</h4>
        <ul style={{ marginLeft: '2rem' }}>
          <li><strong>INSERT:</strong> When new rows are added</li>
          <li><strong>UPDATE:</strong> When existing rows are modified</li>
          <li><strong>DELETE:</strong> When rows are removed</li>
        </ul>

        <h4>FOR EACH ROW:</h4>
        <p>Triggers without FOR EACH ROW fire once per statement.
           Triggers with FOR EACH ROW fire once for each affected row.</p>
      </div>

      <div className="content-section">
        <h3>Example 1: Automatic Timestamp</h3>
        <div className="code-block">
<code>{`CREATE OR REPLACE TRIGGER emp_update_timestamp
BEFORE UPDATE ON employees
FOR EACH ROW
BEGIN
    :NEW.last_modified := SYSDATE;
END emp_update_timestamp;
/`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>Example 2: Audit Trail</h3>
        <div className="code-block">
<code>{`CREATE OR REPLACE TRIGGER emp_audit_insert
AFTER INSERT ON employees
FOR EACH ROW
BEGIN
    INSERT INTO emp_audit_log (action, employee_id, log_date)
    VALUES ('INSERT', :NEW.employee_id, SYSDATE);
END emp_audit_insert;
/`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>Example 3: Validation</h3>
        <div className="code-block">
<code>{`CREATE OR REPLACE TRIGGER emp_validate_salary
BEFORE INSERT OR UPDATE ON employees
FOR EACH ROW
BEGIN
    IF :NEW.salary < 0 THEN
        RAISE_APPLICATION_ERROR(-20001, 'Salary cannot be negative');
    END IF;
END emp_validate_salary;
/`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>Using :OLD and :NEW</h3>
        <p>In row-level triggers, you can reference the old and new values:</p>
        <ul style={{ marginLeft: '2rem' }}>
          <li><strong>:NEW</strong> - New values being inserted/updated</li>
          <li><strong>:OLD</strong> - Old values being updated/deleted</li>
        </ul>

        <h4>Example:</h4>
        <div className="code-block">
<code>{`CREATE OR REPLACE TRIGGER log_salary_changes
AFTER UPDATE ON employees
FOR EACH ROW
WHEN (NEW.salary != OLD.salary)
BEGIN
    INSERT INTO salary_history (emp_id, old_salary, new_salary, change_date)
    VALUES (:OLD.employee_id, :OLD.salary, :NEW.salary, SYSDATE);
END log_salary_changes;
/`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>Managing Triggers</h3>

        <h4>View Triggers:</h4>
        <div className="code-block">
<code>{`SELECT * FROM USER_TRIGGERS;

SELECT TEXT FROM USER_SOURCE
WHERE NAME = 'trigger_name'
ORDER BY LINE;`}</code>
        </div>

        <h4>Enable/Disable Triggers:</h4>
        <div className="code-block">
<code>{`ALTER TRIGGER trigger_name DISABLE;
ALTER TRIGGER trigger_name ENABLE;

-- Disable all triggers on a table
ALTER TABLE employees DISABLE ALL TRIGGERS;
ALTER TABLE employees ENABLE ALL TRIGGERS;`}</code>
        </div>

        <h4>Drop Trigger:</h4>
        <div className="code-block">
<code>{`DROP TRIGGER trigger_name;`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>What are Cursors?</h3>
        <p>
          A cursor is a pointer that allows you to process rows one at a time.
          Cursors let you fetch and manipulate data row-by-row in PL/SQL.
        </p>
      </div>

      <div className="content-section">
        <h3>Cursor Concepts</h3>

        <h4>Types of Cursors:</h4>
        <ul style={{ marginLeft: '2rem' }}>
          <li><strong>Implicit Cursors:</strong> Automatically created for SQL statements</li>
          <li><strong>Explicit Cursors:</strong> Manually declared and managed by programmer</li>
        </ul>

        <h4>Implicit Cursor Attributes:</h4>
        <ul style={{ marginLeft: '2rem' }}>
          <li><strong>SQL%ROWCOUNT:</strong> Number of rows affected</li>
          <li><strong>SQL%FOUND:</strong> TRUE if rows were affected</li>
          <li><strong>SQL%NOTFOUND:</strong> TRUE if no rows were affected</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>Explicit Cursors</h3>

        <h4>Steps:</h4>
        <ol style={{ marginLeft: '2rem' }}>
          <li>DECLARE the cursor</li>
          <li>OPEN the cursor</li>
          <li>FETCH rows one by one</li>
          <li>CLOSE the cursor</li>
        </ol>

        <h4>Syntax:</h4>
        <div className="code-block">
<code>{`DECLARE
    CURSOR cursor_name IS
        SELECT column1, column2, ...
        FROM table_name
        WHERE condition;
    
    v_variable1 datatype;
    v_variable2 datatype;
BEGIN
    OPEN cursor_name;
    
    FETCH cursor_name INTO v_variable1, v_variable2;
    
    WHILE cursor_name%FOUND LOOP
        -- Process fetched data
        DBMS_OUTPUT.PUT_LINE(v_variable1);
        FETCH cursor_name INTO v_variable1, v_variable2;
    END LOOP;
    
    CLOSE cursor_name;
END;
/`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>Example: Process All Employees</h3>
        <div className="code-block">
<code>{`DECLARE
    CURSOR emp_cursor IS
        SELECT employee_id, first_name, salary
        FROM employees;
    
    v_emp_id NUMBER;
    v_emp_name VARCHAR2(50);
    v_salary NUMBER;
BEGIN
    OPEN emp_cursor;
    
    FETCH emp_cursor INTO v_emp_id, v_emp_name, v_salary;
    
    WHILE emp_cursor%FOUND LOOP
        DBMS_OUTPUT.PUT_LINE(v_emp_name || ': ' || v_salary);
        FETCH emp_cursor INTO v_emp_id, v_emp_name, v_salary;
    END LOOP;
    
    CLOSE emp_cursor;
END;
/`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>Cursor FOR LOOP (Simpler)</h3>
        <p>Automatically handles opening, fetching, and closing.</p>

        <div className="code-block">
<code>{`DECLARE
    CURSOR emp_cursor IS
        SELECT employee_id, first_name, salary
        FROM employees;
BEGIN
    FOR emp_record IN emp_cursor LOOP
        DBMS_OUTPUT.PUT_LINE(emp_record.first_name || ': ' || emp_record.salary);
    END LOOP;
END;
/`}</code>
        </div>
      </div>

      <div className="content-section">
        <h3>Cursor Attributes</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Attribute</th>
                <th>Returns</th>
                <th>Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>%FOUND</td>
                <td>TRUE/FALSE</td>
                <td>Row was fetched successfully</td>
              </tr>
              <tr>
                <td>%NOTFOUND</td>
                <td>TRUE/FALSE</td>
                <td>No row was fetched</td>
              </tr>
              <tr>
                <td>%ROWCOUNT</td>
                <td>Number</td>
                <td>Rows fetched so far</td>
              </tr>
              <tr>
                <td>%ISOPEN</td>
                <td>TRUE/FALSE</td>
                <td>Cursor is open</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="exercise-container">
        <h4>✍️ Practice Exercises</h4>
        <ol style={{ marginLeft: '2rem' }}>
          <li>Create a trigger that logs INSERT operations to an audit_log table</li>
          <li>Create a trigger to validate that salary is not negative</li>
          <li>Create an explicit cursor to fetch all employees with salary greater than 50000</li>
          <li>Use a cursor FOR LOOP to display all department names and employee counts</li>
          <li>Create a trigger that automatically updates a last_modified timestamp on UPDATE</li>
        </ol>
      </div>

      <div className="note-box">
        <strong>⚠️ Warning:</strong> Triggers fire automatically, so be careful about side effects.
        Always close cursors to free resources. Use cursor FOR LOOP for simplicity when possible.
      </div>
    </div>
  );
}

export default TriggersTopic;
