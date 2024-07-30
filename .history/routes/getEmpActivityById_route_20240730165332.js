const express = require("express");
const router = express.Router();
const getCertificateById = require("../controllers/getCertificateById");

router.get("/:id", async (req, res) => {
  const certificateId = req.params.id;

  // UUID validation (simple check)
  if (!certificateId || typeof certificateId !== "string") {
    return res.status(400).json({ error: "Invalid certificate ID" });
  }

  try {
    const certificate = await getCertificateById(certificateId);
    if (!certificate) {
      return res
        .status(404)
        .json({ error: `Certificate not found: ${certificateId}` });
    }
    res.json(certificate);
  } catch (error) {
    console.error(
      `Error fetching certificate with ID ${certificateId}:`,
      error
    );
    res
      .status(500)
      .json({ error: `Error fetching certificate: ${certificateId}` });
  }
});

module.exports = router;
