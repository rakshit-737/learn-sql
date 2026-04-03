# SQL & PL/SQL Quick Reference Guide

## 📌 DML COMMANDS

### INSERT
```sql
INSERT INTO table_name (col1, col2, col3)
VALUES (val1, val2, val3);

-- Multiple rows
INSERT INTO table_name (col1, col2)
SELECT col1, col2 FROM other_table;
```

### UPDATE
```sql
UPDATE table_name
SET col1 = val1, col2 = val2
WHERE condition;
```

### DELETE
```sql
DELETE FROM table_name
WHERE condition;
```

---

## 🔢 SQL OPERATORS

### Comparison Operators
- `=` Equal to
- `!=` or `<>` Not equal
- `>` Greater than
- `<` Less than
- `>=` Greater or equal
- `<=` Less or equal

### Logical Operators
- `AND` - All conditions TRUE
- `OR` - At least one TRUE
- `NOT` - Negates condition

### Special Operators
- `BETWEEN` - Range of values
- `IN` - Multiple values
- `LIKE` - Pattern matching
- `IS NULL` - Check for NULL
- `Arithmetic`: `+`, `-`, `*`, `/`, `%`

---

## 📊 AGGREGATE FUNCTIONS

```sql
COUNT(*) or COUNT(column)     -- Count rows
SUM(column)                   -- Sum values
AVG(column)                   -- Average
MAX(column)                   -- Maximum
MIN(column)                   -- Minimum
```

**Usage:**
```sql
SELECT 
    DEPT_ID,
    COUNT(*) as emp_count,
    AVG(SALARY) as avg_salary,
    MAX(SALARY) as max_salary
FROM EMPLOYEES
GROUP BY DEPT_ID;
```

---

## 🔤 STRING FUNCTIONS

```sql
UPPER(string)              -- Convert to uppercase
LOWER(string)              -- Convert to lowercase
LENGTH(string)             -- String length
SUBSTR(string, start, len) -- Extract substring
TRIM(string)               -- Remove spaces
LTRIM/RTRIM(string)        -- Remove left/right spaces
REPLACE(str, old, new)     -- Replace text
CONCAT(str1, str2)         -- Combine strings (or use ||)
INSTR(string, substr)      -- Find position
```

**Examples:**
```sql
SELECT UPPER(EMP_NAME) FROM EMPLOYEES;
SELECT SUBSTR(EMP_NAME, 1, 3) FROM EMPLOYEES;
SELECT EMP_NAME || ' - ' || SALARY FROM EMPLOYEES;
```

---

## 🔢 NUMERIC FUNCTIONS

```sql
ABS(number)           -- Absolute value
ROUND(number, digits) -- Round to decimals
CEIL(number)          -- Round up
FLOOR(number)         -- Round down
MOD(number, divisor)  -- Remainder
POWER(number, power)  -- Raise to power
SQRT(number)          -- Square root
TRUNC(number)         -- Truncate (remove decimals)
```

---

## 📅 DATE FUNCTIONS

```sql
SYSDATE                     -- Current date/time
TRUNC(SYSDATE, 'MM')       -- First day of month
MONTHS_BETWEEN(date1, date2) -- Months between dates
ADD_MONTHS(date, number)    -- Add months to date
NEXT_DAY(date, day)         -- Next occurrence of day
LAST_DAY(date)              -- Last day of month
```

---

## 🔗 JOINS

### INNER JOIN
```sql
SELECT e.col1, d.col2
FROM EMPLOYEES e
INNER JOIN DEPARTMENTS d
ON e.DEPT_ID = d.DEPT_ID;
```

### LEFT JOIN
```sql
SELECT e.col1, d.col2
FROM EMPLOYEES e
LEFT JOIN DEPARTMENTS d
ON e.DEPT_ID = d.DEPT_ID;
```

### RIGHT JOIN
```sql
SELECT e.col1, d.col2
FROM EMPLOYEES e
RIGHT JOIN DEPARTMENTS d
ON e.DEPT_ID = d.DEPT_ID;
```

### FULL OUTER JOIN
```sql
SELECT e.col1, d.col2
FROM EMPLOYEES e
FULL OUTER JOIN DEPARTMENTS d
ON e.DEPT_ID = d.DEPT_ID;
```

### CROSS JOIN
```sql
SELECT e.col1, d.col2
FROM EMPLOYEES e
CROSS JOIN DEPARTMENTS d;
```

---

## 🔍 SUBQUERIES

### Single Row
```sql
SELECT col1, col2
FROM table1
WHERE col = (SELECT MAX(col) FROM table2);
```

### Multiple Rows
```sql
SELECT col1
FROM table1
WHERE col IN (SELECT col FROM table2 WHERE condition);
```

### Correlated
```sql
SELECT col1
FROM table1 e
WHERE SALARY > (
    SELECT AVG(SALARY) 
    FROM table2 
    WHERE DEPT_ID = e.DEPT_ID
);
```

---

## 👁️ VIEWS

### Create
```sql
CREATE VIEW view_name AS
SELECT col1, col2, col3
FROM table_name
WHERE condition;
```

### Query
```sql
SELECT * FROM view_name WHERE condition;
```

### Modify
```sql
ALTER VIEW view_name AS
SELECT new_columns FROM table_name;
```

### Drop
```sql
DROP VIEW view_name;
```

---

## 🔢 SEQUENCES

### Create
```sql
CREATE SEQUENCE seq_name
START WITH 1000
INCREMENT BY 1
MAXVALUE 9999
CACHE 10;
```

### Use
```sql
INSERT INTO table_name (id) VALUES (seq_name.NEXTVAL);
SELECT seq_name.CURRVAL FROM DUAL;
```

### Alter
```sql
ALTER SEQUENCE seq_name INCREMENT BY 5;
```

### Drop
```sql
DROP SEQUENCE seq_name;
```

---

## 🔗 SYNONYMS

### Create
```sql
CREATE SYNONYM syn_name FOR owner.table_name;
CREATE PUBLIC SYNONYM syn_name FOR owner.table_name;
```

### Use
```sql
SELECT * FROM syn_name;
```

### Drop
```sql
DROP SYNONYM syn_name;
```

---

## ⚡ PL/SQL BASICS

### Block Structure
```sql
DECLARE
    v_name VARCHAR2(50);
    v_salary NUMBER;
BEGIN
    -- Statements
    v_name := 'John';
    v_salary := 50000;
EXCEPTION
    WHEN exception_type THEN
        -- Handle error
END;
/
```

### Data Types
```
VARCHAR2(n)   - Variable length string
CHAR(n)       - Fixed length string
NUMBER(p,s)   - Numeric value
DATE          - Date value
BOOLEAN       - TRUE, FALSE, NULL
```

### Variable Assignment
```
variable := value;
```

### IF-THEN-ELSE
```sql
IF condition THEN
    statements;
ELSIF condition THEN
    statements;
ELSE
    statements;
END IF;
```

### Simple LOOP
```sql
LOOP
    statements;
    EXIT WHEN condition;
END LOOP;
```

### FOR LOOP
```sql
FOR i IN 1..10 LOOP
    DBMS_OUTPUT.PUT_LINE(i);
END LOOP;
```

### WHILE LOOP
```sql
WHILE condition LOOP
    statements;
END WHILE;
```

---

## 🛠️ STORED PROCEDURES

### Create
```sql
CREATE PROCEDURE proc_name (
    p_param1 IN NUMBER,
    p_param2 OUT VARCHAR2,
    p_param3 IN OUT NUMBER
) IS
BEGIN
    -- Procedure body
    SELECT column INTO p_param2 FROM table WHERE id = p_param1;
    p_param3 := p_param3 * 2;
    COMMIT;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('No data found');
END proc_name;
/
```

### Execute
```sql
EXECUTE proc_name(100, output_var, in_out_var);
```

---

## 📊 FUNCTIONS

### Create
```sql
CREATE FUNCTION func_name (
    p_param NUMBER
) RETURN NUMBER IS
    v_result NUMBER;
BEGIN
    v_result := p_param * 2;
    RETURN v_result;
END func_name;
/
```

### Use
```sql
SELECT func_name(50) FROM DUAL;
SELECT EMP_NAME, func_name(SALARY) FROM EMPLOYEES;
```

---

## 🔔 TRIGGERS

### Create
```sql
CREATE OR REPLACE TRIGGER trigger_name
BEFORE INSERT ON table_name
FOR EACH ROW
BEGIN
    :NEW.created_date := SYSDATE;
    :NEW.created_by := USER;
END trigger_name;
/
```

### Timing
- `BEFORE` or `AFTER`
- `INSERT`, `UPDATE`, or `DELETE`
- `FOR EACH ROW` (row-level trigger)

### Referencing Values
- `:NEW.column` - New value after insert/update
- `:OLD.column` - Old value before update/delete

---

## 📝 CURSORS

### Declare and Use
```sql
DECLARE
    CURSOR emp_cursor IS
        SELECT EMP_ID, EMP_NAME, SALARY
        FROM EMPLOYEES
        WHERE DEPT_ID = 'IT';
    
    v_emp_id NUMBER;
    v_emp_name VARCHAR2(50);
    v_salary NUMBER;
BEGIN
    OPEN emp_cursor;
    LOOP
        FETCH emp_cursor INTO v_emp_id, v_emp_name, v_salary;
        EXIT WHEN emp_cursor%NOTFOUND;
        
        DBMS_OUTPUT.PUT_LINE(v_emp_name || ' - ' || v_salary);
    END LOOP;
    CLOSE emp_cursor;
END;
/
```

### Cursor Attributes
- `%FOUND` - Last FETCH returned a row
- `%NOTFOUND` - Last FETCH did not return a row
- `%ROWCOUNT` - Number of rows fetched so far
- `%ISOPEN` - Cursor is open

---

## 🎯 COMMON PATTERNS

### Get Maximum Value Employee
```sql
SELECT EMP_NAME, SALARY
FROM EMPLOYEES
WHERE SALARY = (SELECT MAX(SALARY) FROM EMPLOYEES);
```

### Group By with Count
```sql
SELECT DEPT_ID, COUNT(*) as emp_count
FROM EMPLOYEES
GROUP BY DEPT_ID
HAVING COUNT(*) > 5;
```

### Multiple Conditions
```sql
SELECT *
FROM EMPLOYEES
WHERE (SALARY > 50000 AND DEPT_ID = 'IT')
   OR (SALARY > 70000 AND DEPT_ID = 'HR');
```

### Order By
```sql
SELECT EMP_NAME, SALARY
FROM EMPLOYEES
ORDER BY SALARY DESC, EMP_NAME ASC;
```

### Distinct
```sql
SELECT DISTINCT DEPT_ID
FROM EMPLOYEES;
```

### Limit Results (Using ROWNUM - Oracle)
```sql
SELECT * FROM (
    SELECT * FROM EMPLOYEES
    ORDER BY SALARY DESC
)
WHERE ROWNUM <= 10;
```

### String Concatenation
```sql
SELECT EMP_NAME || ' works in ' || DEPT_ID as info
FROM EMPLOYEES;
```

---

## ⚠️ COMMON MISTAKES

1. ❌ Missing WHERE in UPDATE/DELETE
   - ✅ Always include: `WHERE condition;`

2. ❌ Wrong JOIN condition
   - ✅ Use: `ON table1.key = table2.key`

3. ❌ Forgetting semicolon in PL/SQL
   - ✅ End each statement with `;`

4. ❌ Not committing changes
   - ✅ Use: `COMMIT;` after DML

5. ❌ Comparing with NULL using =
   - ✅ Use: `WHERE column IS NULL`

6. ❌ LIKE without wildcards
   - ✅ Use: `LIKE 'J%'` for prefix match

7. ❌ Forgetting to close cursor
   - ✅ Always: `CLOSE cursor_name;`

8. ❌ Wrong operator precedence
   - ✅ Use parentheses: `(A AND B) OR C`

---

## 🔑 KEY KEYWORDS

| Keyword | Purpose |
|---------|---------|
| SELECT | Retrieve data |
| INSERT | Add data |
| UPDATE | Modify data |
| DELETE | Remove data |
| FROM | Specify table |
| WHERE | Filter rows |
| JOIN | Combine tables |
| GROUP BY | Group results |
| ORDER BY | Sort results |
| HAVING | Filter groups |
| CASE | Conditional logic |
| UNION | Combine result sets |
| CREATE | Create object |
| ALTER | Modify object |
| DROP | Delete object |

---

## 📞 HELP RESOURCES

1. **Syntax Error?** → Check syntax section in learning app
2. **Wrong Answer?** → Review the example queries
3. **Concept Unclear?** → Read theory explanation
4. **Need Practice?** → Complete all exercises
5. **Assessment Time?** → Take the final quiz

---

**Print this guide for quick reference while coding!**

**Created**: April 3, 2026
**For**: Engineering Database Systems Lab
