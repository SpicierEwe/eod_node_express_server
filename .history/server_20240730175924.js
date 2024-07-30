const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes

// Import route files with the naming convention
const createCertificateRoute = require("./routes/createCertificate_route");
const getAllCertificatesRoute = require("./routes/getAllCertificates_route");
const getCertificateByIdRoute = require("./routes/getCertificateById_route");
const updateCertificateRoute = require("./routes/updateCertificate_route");
const deleteCertificateRoute = require("./routes/deleteCertificate_route");

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./api_documentation/documentation.html"));
});

// Use the routes
app.use("/certificates", createCertificateRoute);
app.use("/certificates", getAllCertificatesRoute);
app.use("/certificates", getCertificateByIdRoute);
app.use("/certificates", updateCertificateRoute);
app.use("/certificates", deleteCertificateRoute);

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
