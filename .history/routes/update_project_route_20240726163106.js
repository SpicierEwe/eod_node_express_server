const express = require("express");
const router = express.Router();
const updateProject = require("../controllers/updateEmpActivity");

router.put("/:id", async (req, res) => {
  const projectId = parseInt(req.params.id);
  if (!projectId || isNaN(projectId)) {
    return res.status(400).json({ error: "Invalid Project ID" });
  }

  try {
    const updated = await updateProject(projectId, req.body);
    if (!updated) {
      return res
        .status(404)
        .json({ error: "Project not found or no changes made" });
    }
    res.json({ message: "Project updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error updating Project" });
  }
});

module.exports = router;
