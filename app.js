const express = require("express");
const app = express();
app.use(express.json());

const logsController = require("./controllers/logsController");

app.get("/", (req, res) => {
  res.send("Welcome to the captain's log");
});

app.use("/logs", logsController);



app.get("*", (req, res) => {
    res.status(404).json({error: "Sorry no logs found!"})
})


module.exports = app;
