const pool = require("../config/database");

// Update an eod entry
module.exports = async function updateEntry(id, eodData) {
  // Initialize an empty array for query fields and values
  let queryFields = [];
  let queryValues = [];

  // Check which fields are provided and build the query dynamically
  if (eodData.title) {
    queryFields.push("title = ?");
    queryValues.push(eodData.title);
  }
  if (eodData.description) {
    queryFields.push("description = ?");
    queryValues.push(eodData.description);
  }
  if (eodData.department) {
    queryFields.push("department = ?");
    queryValues.push(eodData.department);
  }
  if (eodData.date) {
    queryFields.push("date = ?");
    queryValues.push(eodData.date);
  }
  if (eodData.to) {
    queryFields.push("`to` = ?");
    queryValues.push(eodData.to);
  }
  if (eodData.from) {
    queryFields.push("`from` = ?");
    queryValues.push(eodData.from);
  }
  if (eodData.employee_id) {
    queryFields.push("employee_id = ?");
    queryValues.push(eodData.employee_id);
  }
  if (eodData.manager_id) {
    queryFields.push("manager_id = ?");
    queryValues.push(eodData.manager_id);
  }

  // Ensure that there's at least one field to update
  if (queryFields.length === 0) {
    throw new Error("No fields to update");
  }

  // Append the WHERE clause
  const sql = `UPDATE eod SET ${queryFields.join(", ")} WHERE id = ?`;

  // Add the ID to the end of the query values
  queryValues.push(id);

  try {
    const [result] = await pool.query(sql, queryValues);
    return result.affectedRows > 0; // Return true if update was successful
  } catch (error) {
    console.error(`Error updating eod entry with ID ${id}:`, error);
    throw error;
  }
};
