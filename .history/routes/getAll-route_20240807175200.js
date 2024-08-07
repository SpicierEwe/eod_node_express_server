const express = require("express");
const router = express.Router();
const getAllEodEntries = require("../controllers/getAll"); // Ensure this imports the correct function

/**
 * @swagger
 * /eod:
 *   get:
 *     summary: Fetch all eod entries
 *     tags:
 *       - EOD
 *     responses:
 *       200:
 *         description: A list of all eod entries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   title:
 *                     type: string
 *                     example: "Entry Title"
 *                   description:
 *                     type: string
 *                     example: "Description of the entry"
 *                   department:
 *                     type: string
 *                     example: "Department Name"
 *                   date:
 *                     type: string
 *                     format: date
 *                     example: "2024-07-01"
 *                   to:
 *                     type: string
 *                     example: "Recipient"
 *                   from:
 *                     type: string
 *                     example: "Sender"
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-07-01T08:00:00Z"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-07-02T08:00:00Z"
 *                   employee_id:
 *                     type: integer
 *                     example: 2
 *                   manager_id:
 *                     type: integer
 *                     example: 3
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error fetching eod entries"
 */
router.get("/", async (req, res) => {
  try {
    const eodEntries = await getAllEodEntries(); // Fetch all eod entries
    res.json(eodEntries);
  } catch (error) {
    console.error("Error fetching eod entries:", error);
    res.status(500).json({ error: "Error fetching eod entries" });
  }
});

module.exports = router;
