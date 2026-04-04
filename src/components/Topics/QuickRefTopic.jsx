import React, { useState } from 'react';
import CodeBlock from '../CodeBlock';
import './QuickRefTopic.css';

const SECTIONS = [
  {
    id: 'dml',
    title: 'DML Commands',
    emoji: '📌',
    color: 'cyan',
    entries: [
      {
        label: 'INSERT',
        code: `INSERT INTO table_name (col1, col2, col3)
VALUES (val1, val2, val3);

-- Multiple rows via subquery
INSERT INTO table_name (col1, col2)
SELECT col1, col2 FROM other_table;`,
      },
      {
        label: 'UPDATE',
        code: `UPDATE table_name
SET col1 = val1, col2 = val2
WHERE condition;`,
      },
      {
        label: 'DELETE',
        code: `DELETE FROM table_name
WHERE condition;`,
      },
      {
        label: 'SELECT',
        code: `SELECT col1, col2
FROM table_name
WHERE condition
ORDER BY col1 DESC;`,
      },
    ],
  },
  {
    id: 'operators',
    title: 'SQL Operators',
    emoji: '🔢',
    color: 'amber',
    entries: [
      {
        label: 'Comparison',
        code: `=    Equal to
!=   Not equal  (also <>)
>    Greater than
<    Less than
>=   Greater or equal
<=   Less or equal`,
      },
      {
        label: 'Special Operators',
        code: `-- Range
WHERE salary BETWEEN 30000 AND 60000;

-- List membership
WHERE dept_id IN ('HR', 'IT', 'Finance');

-- Pattern matching
WHERE emp_name LIKE 'J%';   -- starts with J
WHERE emp_name LIKE '%son'; -- ends with son

-- NULL check
WHERE manager_id IS NULL;`,
      },
    ],
  },
  {
    id: 'aggregate',
    title: 'Aggregate Functions',
    emoji: '📊',
    color: 'green',
    entries: [
      {
        label: 'Functions',
        code: `COUNT(*) or COUNT(column)  -- count rows
SUM(column)                -- sum values
AVG(column)                -- average
MAX(column)                -- maximum
MIN(column)                -- minimum`,
      },
      {
        label: 'GROUP BY + HAVING',
        code: `SELECT DEPT_ID,
       COUNT(*) AS emp_count,
       AVG(SALARY) AS avg_salary,
       MAX(SALARY) AS max_salary
FROM EMPLOYEES
GROUP BY DEPT_ID
HAVING COUNT(*) > 5;`,
      },
    ],
  },
  {
    id: 'string',
    title: 'String Functions',
    emoji: '🔤',
    color: 'purple',
    entries: [
      {
        label: 'Functions',
        code: `UPPER(string)               -- UPPER CASE
LOWER(string)               -- lower case
LENGTH(string)              -- character count
SUBSTR(string, start, len)  -- extract substring
TRIM(string)                -- remove spaces
REPLACE(str, old, new)      -- replace text
CONCAT(str1, str2)          -- combine (or use ||)
INSTR(string, substr)       -- find position`,
      },
      {
        label: 'Examples',
        code: `SELECT UPPER(EMP_NAME) FROM EMPLOYEES;
SELECT SUBSTR(EMP_NAME, 1, 3) FROM EMPLOYEES;
SELECT EMP_NAME || ' - ' || SALARY FROM EMPLOYEES;`,
      },
    ],
  },
  {
    id: 'numeric',
    title: 'Numeric Functions',
    emoji: '🔢',
    color: 'orange',
    entries: [
      {
        label: 'Functions',
        code: `ABS(number)           -- absolute value
ROUND(number, digits) -- round to decimals
CEIL(number)          -- round up
FLOOR(number)         -- round down
MOD(number, divisor)  -- remainder
POWER(number, exp)    -- raise to power
SQRT(number)          -- square root
TRUNC(number)         -- truncate decimals`,
      },
    ],
  },
  {
    id: 'date',
    title: 'Date Functions',
    emoji: '📅',
    color: 'teal',
    entries: [
      {
        label: 'Functions',
        code: `SYSDATE                        -- current date/time
TRUNC(SYSDATE, 'MM')          -- first day of month
MONTHS_BETWEEN(date1, date2)  -- months between dates
ADD_MONTHS(date, n)           -- add n months
NEXT_DAY(date, 'MONDAY')      -- next occurrence of day
LAST_DAY(date)                -- last day of month`,
      },
    ],
  },
  {
    id: 'joins',
    title: 'Joins',
    emoji: '🔗',
    color: 'blue',
    entries: [
      {
        label: 'INNER JOIN',
        code: `SELECT e.col1, d.col2
FROM EMPLOYEES e
INNER JOIN DEPARTMENTS d
  ON e.DEPT_ID = d.DEPT_ID;`,
      },
      {
        label: 'LEFT / RIGHT JOIN',
        code: `-- All left rows + matching right
SELECT e.col1, d.col2
FROM EMPLOYEES e
LEFT JOIN DEPARTMENTS d
  ON e.DEPT_ID = d.DEPT_ID;`,
      },
      {
        label: 'FULL OUTER JOIN',
        code: `SELECT e.col1, d.col2
FROM EMPLOYEES e
FULL OUTER JOIN DEPARTMENTS d
  ON e.DEPT_ID = d.DEPT_ID;`,
      },
      {
        label: 'CROSS JOIN',
        code: `SELECT e.col1, d.col2
FROM EMPLOYEES e
CROSS JOIN DEPARTMENTS d;`,
      },
    ],
  },
  {
    id: 'subqueries',
    title: 'Subqueries & Views',
    emoji: '🔍',
    color: 'indigo',
    entries: [
      {
        label: 'Single Row',
        code: `SELECT col1, col2 FROM table1
WHERE col = (SELECT MAX(col) FROM table2);`,
      },
      {
        label: 'Multiple Rows',
        code: `SELECT col1 FROM table1
WHERE col IN (
  SELECT col FROM table2 WHERE condition
);`,
      },
      {
        label: 'Correlated',
        code: `SELECT col1 FROM EMPLOYEES e
WHERE SALARY > (
  SELECT AVG(SALARY)
  FROM EMPLOYEES
  WHERE DEPT_ID = e.DEPT_ID
);`,
      },
      {
        label: 'Views',
        code: `-- Create
CREATE VIEW view_name AS
  SELECT col1, col2 FROM table_name WHERE condition;

-- Query
SELECT * FROM view_name WHERE condition;

-- Drop
DROP VIEW view_name;`,
      },
    ],
  },
  {
    id: 'sequences',
    title: 'Sequences & Synonyms',
    emoji: '🔢',
    color: 'pink',
    entries: [
      {
        label: 'Sequences',
        code: `CREATE SEQUENCE seq_name
  START WITH 1000
  INCREMENT BY 1
  MAXVALUE 9999
  CACHE 10;

-- Use
INSERT INTO table_name (id) VALUES (seq_name.NEXTVAL);
SELECT seq_name.CURRVAL FROM DUAL;`,
      },
      {
        label: 'Synonyms',
        code: `CREATE SYNONYM syn_name FOR owner.table_name;
CREATE PUBLIC SYNONYM syn_name FOR owner.table_name;

SELECT * FROM syn_name;  -- use synonym
DROP SYNONYM syn_name;`,
      },
    ],
  },
  {
    id: 'plsql',
    title: 'PL/SQL Basics',
    emoji: '⚡',
    color: 'yellow',
    entries: [
      {
        label: 'Block Structure',
        code: `DECLARE
    v_name   VARCHAR2(50);
    v_salary NUMBER := 50000;
BEGIN
    v_name := 'John';
    DBMS_OUTPUT.PUT_LINE(v_name || ': ' || v_salary);
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Not found');
END;
/`,
      },
      {
        label: 'IF / LOOP',
        code: `-- IF-THEN-ELSE
IF condition THEN
    statements;
ELSIF condition THEN
    statements;
ELSE
    statements;
END IF;

-- FOR LOOP
FOR i IN 1..10 LOOP
    DBMS_OUTPUT.PUT_LINE(i);
END LOOP;

-- WHILE LOOP
WHILE condition LOOP
    statements;
END LOOP;`,
      },
    ],
  },
  {
    id: 'procedures',
    title: 'Procedures & Functions',
    emoji: '🛠️',
    color: 'red',
    entries: [
      {
        label: 'Procedure',
        code: `CREATE OR REPLACE PROCEDURE proc_name (
    p_id  IN  NUMBER,
    p_out OUT VARCHAR2
) IS
BEGIN
    SELECT col INTO p_out FROM table WHERE id = p_id;
    COMMIT;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('No data found');
END proc_name;
/

EXECUTE proc_name(100, :result);`,
      },
      {
        label: 'Function',
        code: `CREATE OR REPLACE FUNCTION func_name (
    p_param NUMBER
) RETURN NUMBER IS
    v_result NUMBER;
BEGIN
    v_result := p_param * 2;
    RETURN v_result;
END func_name;
/

SELECT func_name(50) FROM DUAL;`,
      },
    ],
  },
  {
    id: 'triggers',
    title: 'Triggers & Cursors',
    emoji: '🔔',
    color: 'emerald',
    entries: [
      {
        label: 'Trigger',
        code: `CREATE OR REPLACE TRIGGER trigger_name
BEFORE INSERT ON table_name
FOR EACH ROW
BEGIN
    :NEW.created_date := SYSDATE;
    :NEW.created_by   := USER;
END trigger_name;
/

-- :NEW.column  → new value after insert/update
-- :OLD.column  → old value before update/delete`,
      },
      {
        label: 'Explicit Cursor',
        code: `DECLARE
    CURSOR emp_cursor IS
        SELECT EMP_ID, EMP_NAME, SALARY
        FROM EMPLOYEES
        WHERE DEPT_ID = 'IT';
BEGIN
    FOR rec IN emp_cursor LOOP
        DBMS_OUTPUT.PUT_LINE(rec.EMP_NAME || ' - ' || rec.SALARY);
    END LOOP;
END;
/

-- %FOUND     last FETCH returned a row
-- %NOTFOUND  last FETCH returned nothing
-- %ROWCOUNT  rows fetched so far
-- %ISOPEN    cursor is open`,
      },
    ],
  },
];

const COMMON_MISTAKES = [
  { bad: 'UPDATE / DELETE without WHERE',       good: 'Always include WHERE condition' },
  { bad: 'Wrong JOIN condition',                good: 'ON table1.key = table2.key' },
  { bad: 'Comparing with NULL using =',         good: 'Use IS NULL / IS NOT NULL' },
  { bad: 'LIKE without wildcards',              good: "Use LIKE 'J%' for prefix match" },
  { bad: 'Forgetting COMMIT after DML',         good: 'Add COMMIT; after INSERT/UPDATE/DELETE' },
  { bad: 'Forgetting / after PL/SQL block',     good: 'End each block with / on a new line' },
  { bad: 'Not closing cursor',                  good: 'Always CLOSE cursor_name;' },
  { bad: 'Wrong operator precedence',           good: 'Use parentheses: (A AND B) OR C' },
];

function QuickRefTopic() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredSections = activeFilter === 'all'
    ? SECTIONS
    : SECTIONS.filter((s) => s.id === activeFilter);

  return (
    <div className="topic-content">
      <div className="content-header">
        <h2>Quick Reference</h2>
        <p>Complete SQL &amp; PL/SQL cheat sheet — copy-paste ready syntax for every topic.</p>
      </div>

      {/* Filter pills */}
      <div className="qr-filter-row">
        <button
          className={`qr-filter-pill${activeFilter === 'all' ? ' qr-filter-pill--active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All Topics
        </button>
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            className={`qr-filter-pill${activeFilter === s.id ? ' qr-filter-pill--active' : ''}`}
            onClick={() => setActiveFilter(s.id)}
          >
            {s.emoji} {s.title}
          </button>
        ))}
      </div>

      {/* Reference cards grid */}
      <div className="qr-grid">
        {filteredSections.map((section) => (
          <div key={section.id} className={`qr-card qr-card--${section.color}`}>
            <div className="qr-card__header">
              <span className="qr-card__emoji" aria-hidden="true">{section.emoji}</span>
              <h3 className="qr-card__title">{section.title}</h3>
            </div>
            <div className="qr-card__body">
              {section.entries.map((entry, i) => (
                <div key={i} className="qr-entry">
                  <p className="qr-entry__label">{entry.label}</p>
                  <CodeBlock language="SQL">
                    <code>{entry.code}</code>
                  </CodeBlock>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Common mistakes */}
      {(activeFilter === 'all') && (
        <div className="content-section reveal">
          <h3>⚠️ Common Mistakes to Avoid</h3>
          <div className="mistakes-grid">
            {COMMON_MISTAKES.map((m, i) => (
              <div key={i} className="mistake-card">
                <div className="mistake-card__bad">
                  <span className="mistake-card__icon mistake-card__icon--bad">✗</span>
                  <span>{m.bad}</span>
                </div>
                <div className="mistake-card__good">
                  <span className="mistake-card__icon mistake-card__icon--good">✓</span>
                  <span>{m.good}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Key keywords table */}
      {(activeFilter === 'all') && (
        <div className="content-section reveal">
          <h3>🔑 Key SQL Keywords</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Keyword</th>
                  <th>Purpose</th>
                  <th>Keyword</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['SELECT', 'Retrieve data',   'GROUP BY', 'Group results'],
                  ['INSERT', 'Add data',         'ORDER BY', 'Sort results'],
                  ['UPDATE', 'Modify data',      'HAVING',   'Filter groups'],
                  ['DELETE', 'Remove data',      'CASE',     'Conditional logic'],
                  ['FROM',   'Specify table',    'UNION',    'Combine result sets'],
                  ['WHERE',  'Filter rows',      'CREATE',   'Create object'],
                  ['JOIN',   'Combine tables',   'DROP',     'Delete object'],
                ].map(([k1, p1, k2, p2], i) => (
                  <tr key={i}>
                    <td><code>{k1}</code></td>
                    <td>{p1}</td>
                    <td><code>{k2}</code></td>
                    <td>{p2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="note-box">
        <strong>💡 Print Tip:</strong> Use Ctrl+P (or ⌘+P on Mac) to print this page for a handy desk reference while you code.
      </div>
    </div>
  );
}

export default QuickRefTopic;
