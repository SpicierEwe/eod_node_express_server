const express = require("express");
const router = express.Router();
const createCertificate = require("../controllers/createCertificate");

router.post("/", async (req, res) => {
  try {
    const certificateId = await createCertificate(req.body);
    res.status(201).json({
      id: certificateId,
      message: "Certificate created successfully",
    });
  } catch (error) {
    console.error("Error creating certificate:", error);
    res.status(500).json({ error: "Error creating certificate" });
  }
});

module.exports = router;
