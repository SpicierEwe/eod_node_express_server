const express = require("express");
const router = express.Router();
const getProjectById = require("../controllers/getEmpActivityById");

router.get("/:id", async (req, res) => {
  const projectId = parseInt(req.params.id);
  if (!projectId || isNaN(projectId)) {
    return res.status(400).json({ error: "Invalid proejct ID" });
  }

  try {
    const task = await getProjectById(projectId);
    if (!task) {
      return res
        .status(404)
        .json({ error: "proejct not found : " + projectId });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: "Error fetching project : " + projectId });
  }
});

module.exports = router;
