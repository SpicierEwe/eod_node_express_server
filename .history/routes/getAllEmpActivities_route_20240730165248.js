const express = require("express");
const router = express.Router();
const getAllCertificates = require("../controllers/getAllCertificates");

router.get("/", async (req, res) => {
  try {
    const certificates = await getAllCertificates();
    res.json(certificates);
  } catch (error) {
    console.error("Error fetching certificates:", error);
    res.status(500).json({ error: "Error fetching certificates" });
  }
});

module.exports = router;
