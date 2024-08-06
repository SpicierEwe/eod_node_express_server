const pool = require("../config/database");

// Read a specific eod entry by ID
module.exports = async function getEntryById(id) {
  try {
    const [rows] = await pool.query("SELECT * FROM eod WHERE id = ?", [id]);
    return rows[0]; // Assuming ID is unique, return the first (and only) row
  } catch (error) {
    console.error(`Error fetching eod entry with ID ${id}:`, error);
    throw error;
  }
};
