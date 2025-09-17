const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database(":memory:", (err) => {
  if (err) {
    console.error("DB connection failed: " + err.message);
  } else {
    console.log("Connected to SQLite database.");
  }
});
module.exports = db;
