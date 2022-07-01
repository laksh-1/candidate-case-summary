/*jshint esversion: 6 */
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const db = mysql.createPool({
  host: "bnhiovial5cl0u3lc6zm-mysql.services.clever-cloud.com",
  user: "uzpj6ckvryhhrcwe",
  password: "0BcD3NfbXbdEo3BfHaIl",
  database: "bnhiovial5cl0u3lc6zm",
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
  const userName = req.body.userName;
  const location = req.body.location;
  const experience = req.body.experience;
  const salary = req.body.salary;
  const academics = req.body.academics;
  const others = req.body.others;
  const handle = req.body.handle;
  const offerInHand = req.body.offerInHand;

  const formFields = req.body.formFields;
  // console.log(formFields);
  // console.log(handle);
  // console.log(offerInHand);
  const sqlInsert =
    "INSERT INTO users (userName, location , experience, salary,academics, technologies , handle, offerInHand) VALUES (?,?,?,?,?,?,?,?);";
  db.query(
    sqlInsert,
    [
      userName,
      location,
      experience,
      salary,
      academics,
      others,
      handle,
      offerInHand,
    ],
    (err, result) => {
      console.log(result);
    }
  );
  if (formFields.length == 1) {
    const sqlInsert =
      "INSERT INTO work (company1, profile1 ,startDate1, endDate1) VALUES (?,?,?,?);";
    db.query(
      sqlInsert,
      [
        formFields[0].work,
        formFields[0].profile,
        formFields[0].startDate,
        formFields[0].endDate,
      ],
      (err, result) => {
        console.log(result);
      }
    );
  } else if (formFields.length == 2) {
    const sqlInsert =
      "INSERT INTO work (company1, profile1 ,startDate1, endDate1,company2, profile2 ,startDate2, endDate2) VALUES (?,?,?,?,?,?,?,?);";
    db.query(
      sqlInsert,
      [
        formFields[0].work,
        formFields[0].profile,
        formFields[0].startDate,
        formFields[0].endDate,
        formFields[1].work,
        formFields[1].profile,
        formFields[1].startDate,
        formFields[1].endDate,
      ],
      (err, result) => {
        console.log(result);
      }
    );
  } else {
    const sqlInsert =
      "INSERT INTO work (company1, profile1 ,startDate1, endDate1,company2, profile2 ,startDate2, endDate2,company3, profile3 ,startDate3, endDate3) VALUES (?,?,?,?,?,?,?,?,?,?,?,?);";
    db.query(
      sqlInsert,
      [
        formFields[0].work,
        formFields[0].profile,
        formFields[0].startDate,
        formFields[0].endDate,
        formFields[1].work,
        formFields[1].profile,
        formFields[1].startDate,
        formFields[1].endDate,
        formFields[2].work,
        formFields[2].profile,
        formFields[2].startDate,
        formFields[2].endDate,
      ],
      (err, result) => {
        console.log(result);
      }
    );
  }
});

app.listen(5000, () => {
  console.log("running on port 5000!");
});
