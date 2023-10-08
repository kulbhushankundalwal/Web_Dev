const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

let createRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "my_app",
  password: "1411Kulbhushan",
});

// let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// let user = ["123", "123_user", "123@xyz.com", "123_pass"];

// let users = [["123a", "123a_user", "123a@xyz.com", "123a_pass"], ["123b", "123b_user", "123b@xyz.com", "123b_pass"]];

// let data = [];
// for (let i = 0; i < 100; i++) {
//   data.push(createRandomUser());
// }

// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }

// connection.end();

app.get("/", (req, res) => {
  let q = "SELECT count(*) FROM user";
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("Some Error");
  }
});

app.get("/user", (req, res) => {
  let q = "SELECT * FROM user";
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      res.render("showusers.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("Some Error");
  }
});

//edit route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("Some Error");
  }
});

//update route
app.patch("/user/:id/", (req, res) => {
  let { password: formPass, username: newUser } = req.body;
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formPass != user.password) {
        res.send("Wrong Password");
      } else {
        let q = `UPDATE user SET username = '${newUser}' WHERE id = '${id}'`;
        try {
          connection.query(q, (err, result) => {
            if (err) throw err;
            res.redirect("/user");
          });
        } catch (err) {
          console.log(err);
          res.send("Some Error");
        }
      }
    });
  } catch (err) {
    console.log(err);
    res.send("Some Error");
  }
});

app.listen("8080", () => {
  console.log("Listening to port 8080");
});
