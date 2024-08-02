const express = require("express");
const router = express.Router();
const getEntryById = require("../controllers/getById"); // Update to import getEntryById

// Route to fetch an Ior entry by ID
router.get("/:id", async (req, res) => {
  const iorId = req.params.id;

  // UUID validation (simple check)
  if (!iorId || typeof iorId !== "string") {
    return res.status(400).json({ error: "Invalid Ior ID" });
  }

  try {
    const iorEntry = await getEntryById(iorId);
    if (!iorEntry) {
      return res
        .status(404)
        .json({ error: `Ior entry not found with ID: ${iorId}` });
    }
    res.json(iorEntry);
  } catch (error) {
    console.error(`Error fetching Ior entry with ID ${iorId}:`, error);
    res
      .status(500)
      .json({ error: `Error fetching Ior entry with ID: ${iorId}` });
  }
});

module.exports = router;
