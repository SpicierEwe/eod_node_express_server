const express = require("express");
const router = express.Router();
const deleteEntry = require("../controllers/delete"); // Update to import deleteEntry

// Route to delete an Ior entry by ID
router.delete("/:id", async (req, res) => {
  const iorId = req.params.id;
  if (!iorId) {
    return res.status(400).json({ error: "Invalid Ior ID" });
  }

  try {
    const deleted = await deleteEntry(iorId);
    if (!deleted) {
      return res.status(404).json({ error: "Ior entry not found" });
    }
    res.json({ message: "Ior entry deleted successfully" });
  } catch (error) {
    console.error(`Error deleting Ior entry with ID ${iorId}:`, error);
    res.status(500).json({ error: "Error deleting Ior entry" });
  }
});

module.exports = router;
