const pool = require("../config/database");

module.exports = async function deleteEntry(id) {
  try {
    const [result] = await pool.query("DELETE FROM Ior WHERE id = ?", [id]);
    return result.affectedRows > 0; // Return true if deletion was successful
  } catch (error) {
    console.error(`Error deleting Ior entry with ID ${id}:`, error);
    throw error;
  }
};
