const pool = require("../config/database");

// Update an Ior entry by ID
module.exports = async function updateIor(id, iorData) {
  // Initialize an empty array for query fields and values
  let queryFields = [];
  let queryValues = [];

  // Check which fields are provided and build the query dynamically
  if (iorData.profile) {
    queryFields.push("profile = ?");
    queryValues.push(iorData.profile);
  }
  if (iorData.name) {
    queryFields.push("name = ?");
    queryValues.push(iorData.name);
  }
  if (iorData.months) {
    queryFields.push("months = ?");
    queryValues.push(iorData.months);
  }
  if (iorData.date) {
    queryFields.push("date = ?");
    queryValues.push(iorData.date);
  }
  if (iorData.issued_by) {
    queryFields.push("issued_by = ?");
    queryValues.push(iorData.issued_by);
  }
  if (iorData.pronoun1) {
    queryFields.push("pronoun1 = ?");
    queryValues.push(iorData.pronoun1);
  }
  if (iorData.pronoun2) {
    queryFields.push("pronoun2 = ?");
    queryValues.push(iorData.pronoun2);
  }
  if (iorData.content) {
    queryFields.push("content = ?");
    queryValues.push(iorData.content);
  }
  if (iorData.status) {
    queryFields.push("status = ?");
    queryValues.push(iorData.status);
  }
  if (iorData.time_stamp) {
    queryFields.push("time_stamp = ?");
    queryValues.push(iorData.time_stamp);
  }

  // Ensure that there's at least one field to update
  if (queryFields.length === 0) {
    throw new Error("No fields to update");
  }

  // Append the WHERE clause
  const sql = `UPDATE Ior SET ${queryFields.join(", ")} WHERE id = ?`;

  // Add the ID to the end of the query values
  queryValues.push(id);

  try {
    const [result] = await pool.query(sql, queryValues);
    return result.affectedRows > 0; // Return true if update was successful
  } catch (error) {
    console.error(`Error updating Ior entry with ID ${id}:`, error);
    throw error;
  }
};
