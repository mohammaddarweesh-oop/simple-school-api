const express = require("express");
const app = express();
const subjectRoutes = require("./routes/subjects");
const studentRoutes = require("./routes/students");
const authRoutes = require("./routes/auth");
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(express.urlencoded());
app.use(express.json());
require("./db.js");

app.use("/api/auth", authRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/users", studentRoutes);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MjkyZDIwM2Y2OWEzNzhlMzI2MGUwNiIsImlhdCI6MTczMDc1MjY3MSwiZXhwIjoxNzMwNzU2MjcxfQ.7Ce3GONyy8Re8PvH2UmeZZOgbgSbWjAb0s62SG6cz0k
