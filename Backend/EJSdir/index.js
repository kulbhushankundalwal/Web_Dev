const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// app.get("/ig/:username", (req, res) => {
//     let {username} = req.params;
//     const followers = ["rahul", "tina", "riya", "mohit"];
//     res.render("ig.ejs", {username, followers});
// })

app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    const igData = require("./data.json");
    const data = igData[username];
    if(data){
        res.render("ig.ejs", {data});
    }else{
        res.render("error.ejs");
    }
})

app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.get("/rolldice", (req, res) => {
    let num = Math.floor(Math.random()*6) + 1;
    res.render("rollDice.ejs", {diceVal: num});
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})