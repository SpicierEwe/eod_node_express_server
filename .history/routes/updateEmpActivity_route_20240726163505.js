const express = require("express");
const router = express.Router();
const updateEmpActivity = require("../controllers/updateEmpActivity");

router.put("/:id", async (req, res) => {
  const activityId = req.params.id;

  // Simple UUID validation
  if (!activityId || typeof activityId !== "string") {
    return res.status(400).json({ error: "Invalid employee activity ID" });
  }

  try {
    const updated = await updateEmpActivity(activityId, req.body);
    if (!updated) {
      return res
        .status(404)
        .json({ error: "Employee activity not found or no changes made" });
    }
    res.json({ message: "Employee activity updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error updating employee activity" });
  }
});

module.exports = router;
