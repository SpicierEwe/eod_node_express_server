const express = require("express");
const router = express.Router();
const getAllEodEntries = require("../controllers/getAll"); // Ensure this imports the correct function

// Route to fetch all eod entries
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
