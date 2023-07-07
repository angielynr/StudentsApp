const express = require("express");
const PORT = 5002;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Worlds");
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
