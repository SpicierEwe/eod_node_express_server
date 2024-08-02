const pool = require("../config/database");

// Read a specific Ior entry by ID
module.exports = async function getIorById(id) {
  try {
    const [rows] = await pool.query("SELECT * FROM Ior WHERE id = ?", [id]);
    return rows[0]; // Assuming ID is unique, return the first (and only) row
  } catch (error) {
    console.error(`Error fetching Ior entry with ID ${id}:`, error);
    throw error;
  }
};
