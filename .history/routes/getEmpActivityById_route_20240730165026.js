const express = require("express");
const router = express.Router();
const getEmpActivityById = require("../controllers/getCertificateById");

router.get("/:id", async (req, res) => {
  const activityId = req.params.id;

  // UUID validation (simple check)
  if (!activityId || typeof activityId !== "string") {
    return res.status(400).json({ error: "Invalid employee activity ID" });
  }

  try {
    const activity = await getEmpActivityById(activityId);
    if (!activity) {
      return res
        .status(404)
        .json({ error: `Employee activity not found: ${activityId}` });
    }
    res.json(activity);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Error fetching employee activity: ${activityId}` });
  }
});

module.exports = router;
