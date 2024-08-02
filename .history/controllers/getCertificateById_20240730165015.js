const pool = require("../config/database");

// Read a specific certificate by ID
module.exports = async function getCertificateById(id) {
  try {
    const [rows, fields] = await pool.query(
      "SELECT * FROM certificate_tbl WHERE id = ?",
      [id]
    );
    return rows[0]; // Assuming ID is unique, return the first (and only) row
  } catch (error) {
    console.error(`Error fetching certificate with ID ${id}:`, error);
    throw error;
  }
};
