const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send({
    status: "success",
    message: "login successful",
    data: null,
  });
});
app.get("/manifest.json", (req, res) => {
  res.sendFile(__dirname + "/manifest.json");
});

app.listen(6500, () => {
  console.log("server started");
});
