const os = require("os");
const express = require("express");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 3000;
const hostname = os.hostname();

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send(`Hello from ${hostname}`);
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
