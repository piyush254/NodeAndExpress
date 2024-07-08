const express = require("express");

const EventEmitter = require("events");

const app = express();
const PORT = 5000;

const event = new EventEmitter();
let count = 0 ;
event.on("countAPI", () => {
  console.log(`Event called ${++count}`);
});

app.get("/", (req, resp) => {
  resp.send("API called");
  event.emit("countAPI");
});

app.get("/search", (req, resp) => {
  resp.send(" Search API called");
  event.emit("countAPI");
});

app.get("/update", (req, resp) => {
  resp.send("Update API called");
  event.emit("countAPI");
});

app.listen(PORT, () => {
  console.log(`Application is runnning on  port ${PORT}`);
});
