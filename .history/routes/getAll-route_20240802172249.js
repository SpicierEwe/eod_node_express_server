const express = require("express");
const router = express.Router();
const getAllEntries = require("../controllers/getAll"); // Update to import getAllIorEntries

// Route to fetch all Ior entries
router.get("/", async (req, res) => {
  try {
    const iorEntries = await getAllIorEntries(); // Fetch all Ior entries
    res.json(iorEntries);
  } catch (error) {
    console.error("Error fetching Ior entries:", error);
    res.status(500).json({ error: "Error fetching Ior entries" });
  }
});

module.exports = router;
