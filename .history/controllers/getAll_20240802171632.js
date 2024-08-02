const pool = require("../config/database");

// Read all Ior entries
module.exports = async function getAllIorEntries() {
  try {
    const [rows] = await pool.query("SELECT * FROM Ior");
    return rows;
  } catch (error) {
    console.error("Error fetching all Ior entries:", error);
    throw error;
  }
};
