const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "7905121424",
  database: "employees",
});

module.exports = pool;
