const express = require("express");
const cors = require("cors");
require("./Db/config");
const users = require("./Db/User");
const app = express();

const PORT = 5000;

app.use(express.json());

app.use(cors());

app.post("/register", async (req, resp) => {
  const user = new users(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.Password 
  delete result.__v 
  resp.send(result);
  console.log(result);
});

app.post("/login", async (req, resp) => {
  const { Name, Password } = req.body;

  if (!Name || !Password) {
    return resp.status(400).json({ error: "Both Name and Password must be entered" });
  }

  try {
    const user = await users.findOne({ Name, Password }).select("-__v -Password");

    if (user) {
      return resp.status(200).json(user);
    } else {
      return resp.status(404).json({ error: "No user found" });
    }
  } catch (error) {
    return resp.status(500).json({ error: "Internal server error" });
  }
});


app.listen(PORT, () => {
  console.log(`Your applcation is running in ${PORT}`);
});
