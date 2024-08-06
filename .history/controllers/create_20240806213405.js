const pool = require("../config/database");

module.exports = async function createEntry(eodData) {
  const {
    title,
    description,
    department,
    date,
    to,
    from,
    employee_id,
    manager_id,
  } = eodData;

  try {
    const [result] = await pool.query(
      `INSERT INTO eod (
        title, description, department, date, \`to\`, \`from\`, employee_id, manager_id
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [title, description, department, date, to, from, employee_id, manager_id]
    );

    return {
      insertId: result.insertId, // Return the ID of the newly inserted row
      affectedRows: result.affectedRows, // Return the number of affected rows
    };
  } catch (error) {
    console.error("Error creating eod entry:", error.message);
    throw new Error(`Failed to create eod entry: ${error.message}`);
  }
};
