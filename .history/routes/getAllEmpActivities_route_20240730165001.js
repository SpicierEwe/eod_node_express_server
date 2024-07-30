const express = require("express");
const router = express.Router();
const getAllEmpActivities = require("../controllers/getAllCertificates");

router.get("/", async (req, res) => {
  try {
    const activities = await getAllEmpActivities();
    res.json(activities);
  } catch (error) {
    res.status(500).json({ error: "Error fetching employee activities" });
  }
});

module.exports = router;
