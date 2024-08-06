const pool = require("../config/database");

// Read all eod entries
module.exports = async function getAllEntries() {
  try {
    const [rows] = await pool.query("SELECT * FROM eod");
    return rows;
  } catch (error) {
    console.error("Error fetching all eod entries:", error);
    throw error;
  }
};
