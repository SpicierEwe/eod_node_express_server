const pool = require("../config/database");

// Read all employee activities
module.exports = async function getAllEmpActivities() {
  try {
    const [rows, fields] = await pool.query("SELECT * FROM emp_activity");
    return rows;
  } catch (error) {
    console.error("Error fetching all employee activities:", error);
    throw error;
  }
};
