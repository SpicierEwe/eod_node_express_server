const express = require("express");
const router = express.Router();
const createIor = require("../controllers/createIor"); // Update to import createIor

// Route to create a new Ior entry
router.post("/", async (req, res) => {
  try {
    // Call the createIor function and get the ID of the newly created entry
    const { insertId } = await create(req.body);
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
