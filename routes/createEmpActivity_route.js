const express = require("express");
const router = express.Router();
const createEmpActivity = require("../controllers/createEmpActivity");

router.post("/", async (req, res) => {
  try {
    const activityId = await createEmpActivity(req.body);
    res
      .status(201)
      .json({
        id: activityId,
        message: "Employee activity created successfully",
      });
  } catch (error) {
    res.status(500).json({ error: "Error creating employee activity" });
  }
});

module.exports = router;
