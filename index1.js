const express = require("express");
const reqfilter = require("./middleware")
const route = express.Router()


const app = express();
const PORT = 5000;

// app.use(reqfilter);


route.use(reqfilter)

app.get("/", (req, resp) => {
  resp.send("Welcome to home page");
});

app.get("/user", (req, resp) => {
  resp.send("Welcome to users page");
});

route.get("/about", (req, resp) => {
  resp.send("Welcome to about page");
});

route.get("/contact",(req, resp) => {
  resp.send("Welcome to contact page");
});

app.use('/',route)

 
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
