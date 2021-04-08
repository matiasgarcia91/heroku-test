const express = require("express");

const PORT = process.env.PORT || 4000;

const app = express();

app.get("/hello", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => console.log("up and running"));
