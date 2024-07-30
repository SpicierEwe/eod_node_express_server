const pool = require("../config/database");

// Update a certificate
module.exports = async function updateCertificate(id, certificateData) {
  // Initialize an empty array for query fields and values
  let queryFields = [];
  let queryValues = [];

  // Check which fields are provided and build the query dynamically
  if (certificateData.name) {
    queryFields.push("name = ?");
    queryValues.push(certificateData.name);
  }
  if (certificateData.email) {
    queryFields.push("email = ?");
    queryValues.push(certificateData.email);
  }
  if (certificateData.months) {
    queryFields.push("months = ?");
    queryValues.push(certificateData.months);
  }
  if (certificateData.certificate_of) {
    queryFields.push("certificate_of = ?");
    queryValues.push(certificateData.certificate_of);
  }
  if (certificateData.date) {
    queryFields.push("date = ?");
    queryValues.push(certificateData.date);
  }
  if (certificateData.profile) {
    queryFields.push("profile = ?");
    queryValues.push(certificateData.profile);
  }
  if (certificateData.time) {
    queryFields.push("time = ?");
    queryValues.push(certificateData.time);
  }
  if (certificateData.c_type) {
    queryFields.push("c_type = ?");
    queryValues.push(certificateData.c_type);
  }
  if (certificateData.content) {
    queryFields.push("content = ?");
    queryValues.push(certificateData.content);
  }
  if (certificateData.issued_by) {
    queryFields.push("issued_by = ?");
    queryValues.push(certificateData.issued_by);
  }
  if (certificateData.status) {
    queryFields.push("status = ?");
    queryValues.push(certificateData.status);
  }
  if (certificateData.time_stamp) {
    queryFields.push("time_stamp = ?");
    queryValues.push(certificateData.time_stamp);
  }

  // Add the updated_at field to the query
  queryFields.push("updated_at = NOW()");

  // Ensure that there's at least one field to update
  if (queryFields.length === 0) {
    throw new Error("No fields to update");
  }

  // Append the WHERE clause
  const sql = `UPDATE certificate_tbl SET ${queryFields.join(
    ", "
  )} WHERE id = ?`;

  // Add the ID to the end of the query values
  queryValues.push(id);

  try {
    const [result] = await pool.query(sql, queryValues);
    return result.affectedRows > 0; // Return true if update was successful
  } catch (error) {
    console.error(`Error updating certificate with ID ${id}:`, error);
    throw error;
  }
};
