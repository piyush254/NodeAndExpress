const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

const PORT = 5000;

app.set("view engine", "ejs");

// app.use(express.static(publicPath))

app.get("", (req, resp) => {
  resp.sendFile(`${publicPath}/index.html`);
});

app.get("/profile", (_, resp) => {
  const user = {
    name: "Piyush",
    age: 24,
    city: "Delhi",
    email: "piyush1999.iimt@gmail.com",
    country: "USA",
    skills: ["c", "php", "Python"],
  };
  resp.render("profile", { user });
});
app.get('/login',(_ ,response)=>{
        response.render("login")
})
app.get("/about", (req, resp) => {
  resp.sendFile(`${publicPath}/index.html`);
});

app.get("*", (req, resp) => {
  resp.sendFile(`${publicPath}/error.html`);
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
