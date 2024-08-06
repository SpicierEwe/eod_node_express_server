const express = require("express");
const router = express.Router();
const deleteEodEntry = require("../controllers/delete"); // Ensure this imports the correct function

// Route to delete an eod entry by ID
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
