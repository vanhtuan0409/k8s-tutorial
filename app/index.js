const os = require("os");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const redis = require("redis");

const rClient = redis.createClient(
  process.env.REDIS_PORT || 6379,
  process.env.REDIS_HOST || "localhost"
);

const app = express();
const port = process.env.PORT || 3000;
const hostname = os.hostname();

app.use(morgan("tiny"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`Hello from ${hostname}`);
});

app.get("/keys/:key", (req, res) => {
  const key = req.params.key;
  const value = rClient.get(key, (err, value) => {
    if (err) {
      return res.json({ error: err });
    }
    res.json({ key, value });
  });
});

app.put("/keys", (req, res) => {
  const { key, value } = req.body;
  rClient.set(key, value, err => {
    if (err) {
      return res.json({ error: err });
    }
    res.json({ ok: true });
  });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
