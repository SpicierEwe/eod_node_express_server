const express = require("express");
const router = express.Router();
const updateCertificate = require("../controllers/updateCertificate");

router.put("/:id", async (req, res) => {
  const certificateId = req.params.id;

  // Simple UUID validation
  if (!certificateId || typeof certificateId !== "string") {
    return res.status(400).json({ error: "Invalid certificate ID" });
  }

  try {
    const updated = await updateCertificate(certificateId, req.body);
    if (!updated) {
      return res
        .status(404)
        .json({ error: "Certificate not found or no changes made" });
    }
    res.json({ message: "Certificate updated successfully" });
  } catch (error) {
    console.error(
      `Error updating certificate with ID ${certificateId}:`,
      error
    );
    res.status(500).json({ error: "Error updating certificate" });
  }
});

module.exports = router;
