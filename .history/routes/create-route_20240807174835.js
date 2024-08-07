const express = require("express");
const router = express.Router();
const createEodEntry = require("../controllers/create"); // Ensure this imports the correct function

/**
 * @swagger
 * /eod:
 *   post:
 *     summary: Create a new EOD entry
 *     tags:
 *       - EOD
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Daily Report"
 *               description:
 *                 type: string
 *                 example: "Completed tasks for the day"
 *               department:
 *                 type: string
 *                 example: "Engineering"
 *               date:
 *                 type: string
 *                 format: date
 *                 example: "2024-08-07"
 *               to:
 *                 type: string
 *                 example: "Manager Name"
 *               from:
 *                 type: string
 *                 example: "Employee Name"
 *               employee_id:
 *                 type: integer
 *                 example: 123
 *               manager_id:
 *                 type: integer
 *                 example: 456
 *     responses:
 *       201:
 *         description: EOD entry created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 message:
 *                   type: string
 *                   example: "EOD entry created successfully"
 *       500:
 *         description: Internal server error
 */
router.post("/", async (req, res) => {
  try {
    // Call the createEodEntry function and get the ID of the newly created entry
    const { insertId } = await createEodEntry(req.body);
    // Respond with the ID and success message
    res.status(201).json({
      id: insertId,
      message: "eod entry created successfully",
    });
  } catch (error) {
    console.error("Error creating eod entry:", error);
    // Respond with an error message if something goes wrong
    res.status(500).json({ error: "Error creating eod entry" });
  }
});

module.exports = router;
