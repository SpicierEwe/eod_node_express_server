const express = require("express");
const router = express.Router();
const createEodEntry = require("../controllers/create"); // Ensure this imports the correct function

// Route to create a new eod entry
router.post("/", async (req, res) => {
  try {
    // Call the createEodEntry function and get the ID of the newly created entry
    const { insertId } = await createEodEntry(req.body);
    // Respond with the ID and success message
    res.status(201).json({
      id: insertId,
      message: "eod entry created successfully",
    });
  } catch (error) {
    console.error("Error creating eod entry:", error);
    // Respond with an error message if something goes wrong
    res.status(500).json({ error: "Error creating eod entry" });
  }
});

module.exports = router;
