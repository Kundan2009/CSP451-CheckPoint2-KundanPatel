const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database(":memory:", (err) => {
  if (err) {
    console.error("DB connection failed: " + err.message);
  } else {
    console.log("Connected to SQLite database.");
  }
});
module.exports = db;


db.serialize(() => {
  db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT, password TEXT)");
  db.run("INSERT INTO users (username, password) VALUES (?, ?)", ["testuser", "pass123"]);
  console.log("Sample user inserted into database");
});
