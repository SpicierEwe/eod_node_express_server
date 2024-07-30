const pool = require("../config/database");

module.exports = async function deleteEmpActivity(id) {
  try {
    const [rows, fields] = await pool.query(
      "DELETE FROM emp_activity WHERE id = ?",
      [id]
    );
    return rows.affectedRows > 0; // Return true if deletion was successful
  } catch (error) {
    console.error(`Error deleting employee activity with ID ${id}:`, error);
    throw error;
  }
};
