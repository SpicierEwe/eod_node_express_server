const express = require("express");
const router = express.Router();
const deleteProject = require("../controllers/deleteEmpActivity");

router.delete("/:id", async (req, res) => {
  const pojectId = parseInt(req.params.id);
  if (!pojectId || isNaN(pojectId)) {
    return res.status(400).json({ error: "Invalid Project ID" });
  }

  try {
    const deleted = await deleteProject(pojectId);
    if (!deleted) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting Project" });
  }
});

module.exports = router;
