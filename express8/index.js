const config = require("./config");
const colors = require('colors')
// const chalk = require('chalk');
const express = require("express");
const app = express();

const PORT = 5000;

app.get("/", (req, resp) => {
  const query = "select * from users";
  config.query(query, (err, result, field) => {
    if(err) throw err 
    else{
      resp.send(result)
    }
  });
});

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}` );
  console.log(`http://localhost:${PORT}/`.yellow)
});