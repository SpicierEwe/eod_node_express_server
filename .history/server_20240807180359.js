const express = require("express");
const path = require("path");
const setupSwagger = require("./api_documentation/swagger"); // Import the swagger setup function

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Setup Swagger
setupSwagger(app);

// Routes
const createRoute = require("./routes/create-route");
const getAllRoute = require("./routes/getAll-route");
const getByIdRoute = require("./routes/getById-route");
const updateRoute = require("./routes/update-route");
const deleteRoute = require("./routes/delete-route");

// Serve API documentation
app.get("/", (req, res) => {
  res.redirect("/api-documentation");
  res.sendFile(path.join(__dirname, "api_documentation", "documentation.html"));
});

// Use the routes with specific endpoints
app.use("/eod", createRoute); // Route to create entries
app.use("/eod", getAllRoute); // Route to get all entries
app.use("/eod", getByIdRoute); // Route to get entry by ID
app.use("/eod", updateRoute); // Route to update entries
app.use("/eod", deleteRoute); // Route to delete entries

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
