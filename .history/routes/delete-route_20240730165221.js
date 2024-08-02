const express = require("express");
const router = express.Router();
const deleteCertificate = require("../controllers/deleteCertificate");

router.delete("/:id", async (req, res) => {
  const certificateId = req.params.id;
  if (!certificateId) {
    return res.status(400).json({ error: "Invalid Certificate ID" });
  }

  try {
    const deleted = await deleteCertificate(certificateId);
    if (!deleted) {
      return res.status(404).json({ error: "Certificate not found" });
    }
    res.json({ message: "Certificate deleted successfully" });
  } catch (error) {
    console.error(
      `Error deleting certificate with ID ${certificateId}:`,
      error
    );
    res.status(500).json({ error: "Error deleting certificate" });
  }
});

module.exports = router;
