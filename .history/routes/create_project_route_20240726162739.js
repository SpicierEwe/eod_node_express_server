const express = require("express");
const router = express.Router();
const createProject = require("../controllers/createEmpActivity");

router.post("/", async (req, res) => {
  try {
    const eventId = await createProject(req.body);
    res
      .status(201)
      .json({ id: eventId, message: "Project created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error creating Project" });
  }
});

module.exports = router;
