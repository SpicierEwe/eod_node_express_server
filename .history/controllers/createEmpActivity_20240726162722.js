const pool = require("../config/database");

module.exports = async function createEmpActivity(activityData) {
  const {
    emp_id,
    employee_activity,
    leave_id,
    task_id,
    proj_id,
    invoice_id,
    ticket_id,
    proposal_id,
    estimate_id,
    deal_id,
    deal_followup_id,
    client_id,
    expenses_id,
    timelog_id,
    event_id,
    product_id,
    credit_note_id,
    payment_id,
    order_id,
    contract_id,
    createdAt,
    updatedAt,
  } = activityData;

  try {
    const [rows, fields] = await pool.query(
      "INSERT INTO emp_activity (emp_id, employee_activity, leave_id, task_id, proj_id, invoice_id, ticket_id, proposal_id, estimate_id, deal_id, deal_followup_id, client_id, expenses_id, timelog_id, event_id, product_id, credit_note_id, payment_id, order_id, contract_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        emp_id,
        employee_activity,
        leave_id,
        task_id,
        proj_id,
        invoice_id,
        ticket_id,
        proposal_id,
        estimate_id,
        deal_id,
        deal_followup_id,
        client_id,
        expenses_id,
        timelog_id,
        event_id,
        product_id,
        credit_note_id,
        payment_id,
        order_id,
        contract_id,
        createdAt,
        updatedAt,
      ]
    );

    return rows.insertId; // Return the ID of the newly inserted activity
  } catch (error) {
    console.error("Error creating employee activity:", error);
    throw error;
  }
};
