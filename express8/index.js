const connection = require("./config");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000 ;
app.use(express.json())

app.get("/", (req, resp) => {
  const quary = "select * from users;";
  connection.query(quary, (err, result, field) => {
    const final_result = {
      status: "Sucess",
      result: result,
    };
    if (!err) {
      //  resp.send(JSON.stringify(final_result));
      resp.send(final_result);
    } else {
      resp.send(err);
      return;
    }
  });
});

app.post("/", (req, resp) => {
  console.log(req.body);
  const delData = "Sahil12@gmail.com"
  const query = "DELETE FROM users WHERE email = ?" 
  const insertQuary = "insert into users set ?"
  const data = {
    username : req.body.username,
    email : req.body.email,
    password : req.body.password,
    created_at :  new Date().toISOString().slice(0, 19).replace("T", " ")
  }
  connection.query(query,delData, (err , result , field)=>{
    const userData ={
      result : result ,
      yourData : data
    }

    if (!err) {
      resp.send(userData)
    }
    else{
      resp.send(userData)
    }
  })
});

const insertData = () => {
  const currentDate = new Date().toISOString().slice(0, 19).replace("T", " ");
  const query =
    "INSERT INTO users (username, email, password, created_at) VALUES ('piyush1999', 'piyush1999.iimt@gmail.com', 'securepassword', ?)";
  const values = [currentDate];

  const quary = "select * from users;";
  connection.query(quary, (err, result, fiels) => {
    if (err) console.log(err);
    else {
      console.log(result);
    }
  });
};

app.listen(PORT, () => {
  console.log(`your application is running on port number ${PORT}`);
});
