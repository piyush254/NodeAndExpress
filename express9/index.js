const config = require("./config");
const express = require("express");
const app = express();

const PORT = 5000;

const query = "select * from users";
const DeleteQuery = "delete from users where id = ?";
const updateQuery = "update users set ? where username = ? ";
const updateData = {
  username: "Piyush",
};
const username = "piyush";
app.get("/", (req, resp) => {
  config.query(query, [updateData, username], (err, result, Field) => {
    if (!err) {
      console.log(result);
      resp.send(result);
    } else {
      resp.send(err);
      throw err;
    }
  });
});

app.delete("/:id", (req, resp) => {
  config.query(DeleteQuery, req.params.id, (err, result, field) => {
    if (!err) {
      resp.send(result);
    }
    else{
      resp.send(err)
    }
  });
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
