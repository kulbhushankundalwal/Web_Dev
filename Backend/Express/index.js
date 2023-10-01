const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`Port is ${port}`)
});

// app.use((req, res) => {
//     console.log("new incoming request");
//     // res.send("Res");
//     res.send({
//         apple: "red",
//         banana: "yellow",
//         orange: "orange"
//     });
// });

app.get("/:username/:id", (req, res) => {
    console.log(req.params);
    res.send("at /:username");
});