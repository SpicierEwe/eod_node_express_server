const pool = require("../config/database");

module.exports = async function createCertificate(certificateData) {
  const {
    name,
    email,
    months,
    certificate_of,
    date,
    profile,
    time,
    c_type,
    content,
    issued_by,
    status,
    time_stamp,
  } = certificateData;

  try {
    const [result] = await pool.query(
      `INSERT INTO certificate_tbl (
        name, email, months, certificate_of, date, profile, time, c_type, content, issued_by, status, time_stamp
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        name,
        email,
        months,
        certificate_of,
        date,
        profile,
        time,
        c_type,
        content,
        issued_by,
        status,
        time_stamp,
      ]
    );

    return {
      insertId: result.insertId, // Return the ID of the newly inserted certificate
      affectedRows: result.affectedRows, // Return the number of affected rows
    };
  } catch (error) {
    console.error("Error creating certificate:", error.message);
    throw new Error(`Failed to create certificate: ${error.message}`);
  }
};
