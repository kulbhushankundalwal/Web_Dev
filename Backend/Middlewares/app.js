const express = require("express");
const app = express();
const ExpressError = require("./ExpressError")

//Middlewares

// app.use(() => {
//     console.log("I am a middleware")
// })

// app.use((req, res) => {
//     console.log("I am a middleware")
//     res.send("middleware finished")
// })

// app.use((req, res, next) => {
//   console.log("I am a middleware");
//   next();
// });

// app.use((req, res, next) => {
//     console.log("I am 1st middleware");
//     next();
//   });
//   app.use((req, res, next) => {
//     console.log("I am 2nd middleware");
//     next();
//   });

// app.use((req, res, next) => {
//     console.log(req.method, req.hostname, req.path);
//     next();
//   });


//logger - morgan
// app.use((req, res, next) => {
//   req.time = new Date(Date.now()).toString();
//   console.log(req.method, req.hostname, req.path, req.time);
//   next();
// });


// path specific
// app.use("/random", (req, res, next) => {
//   console.log("starts at random");
//   next();
// });



// Token, check 
// app.use("/api", (req, res, next) => {
//     let {token} = req.query;
//     if(token === "giveacces"){
//         next();
//     }
//     res.send("Access Denied!")
// })


// Through Custom Error
// app.use("/api", (req, res, next) => {
//     let {token} = req.query;
//     if(token === "giveacces"){
//         next();
//     }
//     throw new ExpressError(404, "Access Denied!")
// })

// app.get("/api", (req, res) => {
//     res.send("data")
// })


// Token, check (alternate way)
// const checkToken = (req, res, next) => {
//     let {token} = req.query;
//     if(token === "giveacces"){
//         next();
//     }
//     res.send("Access Denied!")
// })

// app.get("/api", checkToken, (req, res) => {
//     res.send("data")
// })

app.get("/", (req, res) => {
  res.send("At Root");
});

app.get("/random", (req, res) => {
  res.send("this is random page");
});

app.listen("8080", () => {
  console.log("server listening to port 8080");
});


// 404
// app.use((req, res) => {
//   res.send("Page not found")
// });