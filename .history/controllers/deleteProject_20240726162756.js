const pool = require("../config/database");

module.exports = async function deleteProject(id) {
  try {
    const [rows, fields] = await pool.query(
      "DELETE FROM projects WHERE id = ?",
      [id]
    );
    return rows.affectedRows > 0; // Return true if deletion was successful
  } catch (error) {
    console.error(`Error deleting project with ID ${id}:`, error);
    throw error;
  }
};
