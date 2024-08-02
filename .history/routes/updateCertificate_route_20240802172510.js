const express = require("express");
const router = express.Router();
const updateIor = require("../controllers/updateIor"); // Update to import updateIor

// Route to update an Ior entry by ID
router.put("/:id", async (req, res) => {
  const iorId = req.params.id;

  // Simple UUID validation
  if (!iorId || typeof iorId !== "string") {
    return res.status(400).json({ error: "Invalid Ior ID" });
  }

  try {
    const updated = await updateIor(iorId, req.body);
    if (!updated) {
      return res
        .status(404)
        .json({ error: "Ior entry not found or no changes made" });
    }
    res.json({ message: "Ior entry updated successfully" });
  } catch (error) {
    console.error(`Error updating Ior entry with ID ${iorId}:`, error);
    res.status(500).json({ error: "Error updating Ior entry" });
  }
});

module.exports = router;
