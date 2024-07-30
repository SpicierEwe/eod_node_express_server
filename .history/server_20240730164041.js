const express = require("express");
const path = require("path");

const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes

// Import route files with the naming convention
const createEmpActivityRoute = require("./routes/createEmpActivity_route");
const getAllEmpActivitiesRoute = require("./routes/getAllEmpActivities_route");
const getEmpActivityByIdRoute = require("./routes/getEmpActivityById_route");
const updateEmpActivityRoute = require("./routes/updateEmpActivity_route");
const deleteEmpActivityRoute = require("./routes/deleteEmpActivity_route");

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./api_documentation/documentation.html"));
});

// Use the routes
app.use("/activities", createEmpActivityRoute);
app.use("/activities", getAllEmpActivitiesRoute);
app.use("/activities", getEmpActivityByIdRoute);
app.use("/activities", updateEmpActivityRoute);
app.use("/activities", deleteEmpActivityRoute);

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
