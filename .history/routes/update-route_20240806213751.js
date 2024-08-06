const express = require("express");
const router = express.Router();
const updateEntry = require("../controllers/update"); // Update to import updateEntry

// Route to update an eod entry by ID
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
