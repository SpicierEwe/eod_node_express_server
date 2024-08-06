const express = require("express");
const router = express.Router();
const getEntryById = require("../controllers/getById"); // Update to import getEntryById

// Route to fetch an eod entry by ID
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
