const express = require("express");
const path = require("path");

const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes

// Import route files
const createProjectRouter = require("./routes/create_project_route");
const getAllProjectsRouter = require("./routes/get_all_projects_route");
const getProjectByIdRouter = require("./routes/get_project_by_id_route");
const updateProjectRouter = require("./routes/update_project_route");
const deleteProjectRouter = require("./routes/delete_project_route");

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./api_documentation/documentation.html"));
});

app.use("/projects", createProjectRouter);
app.use("/projects", getAllProjectsRouter);
app.use("/projects", getProjectByIdRouter);
app.use("/projects", updateProjectRouter);
app.use("/projects", deleteProjectRouter);

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
