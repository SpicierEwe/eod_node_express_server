const express = require("express");
const router = express.Router();
const deleteEmpActivity = require("../controllers/deleteCertificate");

router.delete("/:id", async (req, res) => {
  const activityId = req.params.id;
  if (!activityId) {
    return res.status(400).json({ error: "Invalid Employee Activity ID" });
  }

  try {
    const deleted = await deleteEmpActivity(activityId);
    if (!deleted) {
      return res.status(404).json({ error: "Employee activity not found" });
    }
    res.json({ message: "Employee activity deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting employee activity" });
  }
});

module.exports = router;
