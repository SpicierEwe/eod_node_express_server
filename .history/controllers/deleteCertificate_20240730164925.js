const pool = require("../config/database");

module.exports = async function deleteCertificate(id) {
  try {
    const [result] = await pool.query(
      "DELETE FROM certificate_tbl WHERE id = ?",
      [id]
    );
    return result.affectedRows > 0; // Return true if deletion was successful
  } catch (error) {
    console.error(`Error deleting certificate with ID ${id}:`, error);
    throw error;
  }
};
