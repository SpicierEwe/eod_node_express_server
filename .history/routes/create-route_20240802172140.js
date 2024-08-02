const express = require("express");
const router = express.Router();
const createEntry = require("../controllers/createEntry"); // Update to import createIor

// Route to createEntry a new Ior entry
router.post("/", async (req, res) => {
  try {
    // Call the createEntry function and get the ID of the newly created entry
    const { insertId } = await createEntry(req.body);
    // Respond with the ID and success message
    res.status(201).json({
      id: insertId,
      message: "Ior entry created successfully",
    });
  } catch (error) {
    console.error("Error creating Ior entry:", error);
    // Respond with an error message if something goes wrong
    res.status(500).json({ error: "Error creating Ior entry" });
  }
});

module.exports = router;
