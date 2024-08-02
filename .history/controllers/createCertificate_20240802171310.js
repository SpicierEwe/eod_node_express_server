const pool = require("../config/database");

module.exports = async function createIorEntry(iorData) {
  const {
    profile,
    name,
    months,
    date,
    issued_by,
    pronoun1,
    pronoun2,
    content,
    status,
    time_stamp,
  } = iorData;

  try {
    const [result] = await pool.query(
      `INSERT INTO Ior (
        profile, name, months, date, issued_by, pronoun1, pronoun2, content, status, time_stamp
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        profile,
        name,
        months,
        date,
        issued_by,
        pronoun1,
        pronoun2,
        content,
        status,
        time_stamp,
      ]
    );

    return {
      insertId: result.insertId, // Return the ID of the newly inserted row
      affectedRows: result.affectedRows, // Return the number of affected rows
    };
  } catch (error) {
    console.error("Error creating Ior entry:", error.message);
    throw new Error(`Failed to create Ior entry: ${error.message}`);
  }
};
