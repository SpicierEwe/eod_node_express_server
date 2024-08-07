const express = require("express");
const router = express.Router();
const deleteEodEntry = require("../controllers/delete"); // Ensure this imports the correct function

/**
 * @swagger
 * /eod/{id}:
 *   delete:
 *     summary: Delete an eod entry by ID
 *     tags:
 *       - EOD
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the eod entry to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: EOD entry deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "eod entry deleted successfully"
 *       400:
 *         description: Invalid eod ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid eod ID"
 *       404:
 *         description: EOD entry not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "eod entry not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error deleting eod entry"
 */
router.delete("/:id", async (req, res) => {
  const eodId = req.params.id;
  if (!eodId) {
    return res.status(400).json({ error: "Invalid eod ID" });
  }

  try {
    const deleted = await deleteEodEntry(eodId);
    if (!deleted) {
      return res.status(404).json({ error: "eod entry not found" });
    }
    res.json({ message: "eod entry deleted successfully" });
  } catch (error) {
    console.error(`Error deleting eod entry with ID ${eodId}:`, error);
    res.status(500).json({ error: "Error deleting eod entry" });
  }
});

module.exports = router;
