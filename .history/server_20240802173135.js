const express = require("express");
const path = require("path");

const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes

// Import route files with the naming convention
const createoute = require("./routes/create-route");
const getAllRoute = require("./routes/getAll-route");
const getByIdRoute = require("./routes/getById-route");
const updateRoute = require("./routes/update-route");
const deleteRoute = require("./routes/delete-route");

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./api_documentation/documentation.html"));
});

// Use the routes
app.use("/certificates", createoute);
app.use("/certificates", getAllRoute);
app.use("/certificates", getByIdRoute);
app.use("/certificates", updateRoute);
app.use("/certificates", deleteRoute);

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
