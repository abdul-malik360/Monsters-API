const express = require("express");
// const pool = require("./db");

const bodyParser = require("body-parser");
// const monsters = require("./routes/monsters");
// const habitats = require("./routes/habitats");
// const lives = require("./routes/lives");

const routes = require("./routes");

const app = express();
app.use("/", routes);

app.use(bodyParser.json());

// app.use("/monsters", monsters);
// app.use("/habitats", habitats);
// app.use("/lives", lives);

// app.get("/monsters", (request, response, next) => {
//   pool.query("SELECT * FROM monsters ORDER BY id ASC", (err, res) => {
//     // if (err) return console.log(err);
//     if (err) return next(err);

//     // console.log(res.rows);
//     response.json(res.rows);
//   });
// });

// const port = 3000;

// app.listen(port, () => console.log(`Listening on port ${port}`));

// app.get("/monsters/:id", (request, response, next) => {
//   const { id } = request.params;

//   pool.query("SELECT * FROM monsters WHERE id = $1", [id], (err, res) => {
//     if (err) return next(err);
//     response.json(res.rows);
//   });
// });

app.use((err, req, res, next) => {
  res.json(err);
});

module.exports = app;
