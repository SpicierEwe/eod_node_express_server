const express = require("express");
const router = express.Router();
const updateEntry = require("../controllers/update"); // Ensure this imports the correct function

/**
 * @swagger
 * /eod/{id}:
 *   put:
 *     summary: Update an eod entry by ID
 *     tags:
 *       - EOD
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the eod entry to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Updated Entry Title"
 *               description:
 *                 type: string
 *                 example: "Updated description of the entry"
 *               department:
 *                 type: string
 *                 example: "Updated Department Name"
 *               date:
 *                 type: string
 *                 format: date
 *                 example: "2024-07-02"
 *               to:
 *                 type: string
 *                 example: "Updated Recipient"
 *               from:
 *                 type: string
 *                 example: "Updated Sender"
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-07-01T08:00:00Z"
 *               updatedAt:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-07-02T08:00:00Z"
 *               employee_id:
 *                 type: integer
 *                 example: 2
 *               manager_id:
 *                 type: integer
 *                 example: 3
 *     responses:
 *       200:
 *         description: eod entry updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "eod entry updated successfully"
 *       400:
 *         description: Invalid ID supplied or invalid request body
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid eod ID"
 *       404:
 *         description: eod entry not found or no changes made
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "eod entry not found or no changes made"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error updating eod entry"
 */
router.put("/:id", async (req, res) => {
  const eodId = req.params.id;

  // Simple validation for numeric ID (if ID is an integer)
  if (!eodId || isNaN(parseInt(eodId, 10))) {
    return res.status(400).json({ error: "Invalid eod ID" });
  }

  try {
    const updated = await updateEntry(eodId, req.body);
    if (!updated) {
      return res
        .status(404)
        .json({ error: "eod entry not found or no changes made" });
    }
    res.json({ message: "eod entry updated successfully" });
  } catch (error) {
    console.error(`Error updating eod entry with ID ${eodId}:`, error);
    res.status(500).json({ error: "Error updating eod entry" });
  }
});

module.exports = router;
