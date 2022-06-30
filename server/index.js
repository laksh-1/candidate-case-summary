/*jshint esversion: 6 */
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "crud"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.get("/", (req, res) => {
//   const sqlInsert =
//     "INSERT INTO user (username, gender) VALUES ('temp','male');";
//   db.query(sqlInsert, (err, result) => {
//     console.log(err);
//     res.send("index.js on server side!");
//   });
// });

app.post("/api/insert", (req, res) => {
  const experience = req.body.experience;
  const salary = req.body.salary;
  const work = req.body.work;
  const academics = req.body.academics;
  const others = req.body.others;

  const sqlInsert =
    "INSERT INTO user (experience, salary, work, academics, others) VALUES (?,?,?,?,?);";
  db.query(
    sqlInsert,
    [experience, salary, work, academics, others],
    (err, result) => {
      console.log(result);
    }
  );
});

app.listen(3001, () => {
  console.log("running on port 3001!");
});
