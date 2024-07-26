const pool = require("../config/database");

// Update an employee activity
module.exports = async function updateEmpActivity(id, activityData) {
  // Initialize an empty array for query fields and values
  let queryFields = [];
  let queryValues = [];

  // Check which fields are provided and build the query dynamically
  if (activityData.emp_id) {
    queryFields.push("emp_id = ?");
    queryValues.push(activityData.emp_id);
  }
  if (activityData.employee_activity) {
    queryFields.push("employee_activity = ?");
    queryValues.push(activityData.employee_activity);
  }
  if (activityData.leave_id) {
    queryFields.push("leave_id = ?");
    queryValues.push(activityData.leave_id);
  }
  if (activityData.task_id) {
    queryFields.push("task_id = ?");
    queryValues.push(activityData.task_id);
  }
  if (activityData.proj_id) {
    queryFields.push("proj_id = ?");
    queryValues.push(activityData.proj_id);
  }
  if (activityData.invoice_id) {
    queryFields.push("invoice_id = ?");
    queryValues.push(activityData.invoice_id);
  }
  if (activityData.ticket_id) {
    queryFields.push("ticket_id = ?");
    queryValues.push(activityData.ticket_id);
  }
  if (activityData.proposal_id) {
    queryFields.push("proposal_id = ?");
    queryValues.push(activityData.proposal_id);
  }
  if (activityData.estimate_id) {
    queryFields.push("estimate_id = ?");
    queryValues.push(activityData.estimate_id);
  }
  if (activityData.deal_id) {
    queryFields.push("deal_id = ?");
    queryValues.push(activityData.deal_id);
  }
  if (activityData.deal_followup_id) {
    queryFields.push("deal_followup_id = ?");
    queryValues.push(activityData.deal_followup_id);
  }
  if (activityData.client_id) {
    queryFields.push("client_id = ?");
    queryValues.push(activityData.client_id);
  }
  if (activityData.expenses_id) {
    queryFields.push("expenses_id = ?");
    queryValues.push(activityData.expenses_id);
  }
  if (activityData.timelog_id) {
    queryFields.push("timelog_id = ?");
    queryValues.push(activityData.timelog_id);
  }
  if (activityData.event_id) {
    queryFields.push("event_id = ?");
    queryValues.push(activityData.event_id);
  }
  if (activityData.product_id) {
    queryFields.push("product_id = ?");
    queryValues.push(activityData.product_id);
  }
  if (activityData.credit_note_id) {
    queryFields.push("credit_note_id = ?");
    queryValues.push(activityData.credit_note_id);
  }
  if (activityData.payment_id) {
    queryFields.push("payment_id = ?");
    queryValues.push(activityData.payment_id);
  }
  if (activityData.order_id) {
    queryFields.push("order_id = ?");
    queryValues.push(activityData.order_id);
  }
  if (activityData.contract_id) {
    queryFields.push("contract_id = ?");
    queryValues.push(activityData.contract_id);
  }

  // Add the updatedAt field to the query
  queryFields.push("updated_at = NOW()");

  // Ensure that there's at least one field to update
  if (queryFields.length === 0) {
    throw new Error("No fields to update");
  }

  // Append the WHERE clause
  const sql = `UPDATE emp_activity SET ${queryFields.join(", ")} WHERE id = ?`;

  // Add the ID to the end of the query values
  queryValues.push(id);

  try {
    const [rows, fields] = await pool.query(sql, queryValues);
    return rows.affectedRows > 0; // Return true if update was successful
  } catch (error) {
    console.error(`Error updating employee activity with ID ${id}:`, error);
    throw error;
  }
};
