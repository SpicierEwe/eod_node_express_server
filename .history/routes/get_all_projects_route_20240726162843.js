const express = require("express");
const router = express.Router();
const getAllprojects = require("../controllers/getAllEmpActivities");

router.get("/", async (req, res) => {
  try {
    const projects = await getAllprojects();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Error fetching projects" });
  }
});

module.exports = router;
