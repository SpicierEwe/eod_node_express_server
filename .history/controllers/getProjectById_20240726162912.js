const pool = require("../config/database");

// Read a specific employee activity by ID
module.exports = async function getEmpActivityById(id) {
  try {
    const [rows, fields] = await pool.query(
      "SELECT * FROM emp_activity WHERE id = ?",
      [id]
    );
    return rows[0]; // Assuming ID is unique, return the first (and only) row
  } catch (error) {
    console.error(`Error fetching employee activity with ID ${id}:`, error);
    throw error;
  }
};
