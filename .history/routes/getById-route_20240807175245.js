const express = require("express");
const router = express.Router();
const getEntryById = require("../controllers/getById"); // Update to import getEntryById

/**
 * @swagger
 * /eod/{id}:
 *   get:
 *     summary: Fetch an eod entry by ID
 *     tags:
 *       - EOD
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the eod entry to fetch
 *     responses:
 *       200:
 *         description: An eod entry with the specified ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 title:
 *                   type: string
 *                   example: "Entry Title"
 *                 description:
 *                   type: string
 *                   example: "Description of the entry"
 *                 department:
 *                   type: string
 *                   example: "Department Name"
 *                 date:
 *                   type: string
 *                   format: date
 *                   example: "2024-07-01"
 *                 to:
 *                   type: string
 *                   example: "Recipient"
 *                 from:
 *                   type: string
 *                   example: "Sender"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-07-01T08:00:00Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-07-02T08:00:00Z"
 *                 employee_id:
 *                   type: integer
 *                   example: 2
 *                 manager_id:
 *                   type: integer
 *                   example: 3
 *       400:
 *         description: Invalid ID supplied
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid eod ID"
 *       404:
 *         description: eod entry not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "eod entry not found with ID: 123"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error fetching eod entry with ID: 123"
 */
router.get("/:id", async (req, res) => {
  const eodId = req.params.id;

  // Validate the ID (assuming it's an integer or similar type for `eod`)
  if (!eodId || isNaN(parseInt(eodId, 10))) {
    return res.status(400).json({ error: "Invalid eod ID" });
  }

  try {
    const eodEntry = await getEntryById(eodId);
    if (!eodEntry) {
      return res
        .status(404)
        .json({ error: `eod entry not found with ID: ${eodId}` });
    }
    res.json(eodEntry);
  } catch (error) {
    console.error(`Error fetching eod entry with ID ${eodId}:`, error);
    res
      .status(500)
      .json({ error: `Error fetching eod entry with ID: ${eodId}` });
  }
});

module.exports = router;
