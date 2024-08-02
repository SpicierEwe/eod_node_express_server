const pool = require("../config/database");

// Read all certificates
module.exports = async function getAllCertificates() {
  try {
    const [rows, fields] = await pool.query("SELECT * FROM certificate_tbl");
    return rows;
  } catch (error) {
    console.error("Error fetching all certificates:", error);
    throw error;
  }
};
