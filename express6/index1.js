const express = require("express");
require("./config");

const Products = require("./products");

const PORT = 5000;
const app = express();

app.use(express.json());
app.post("/create", async (req, res) => {
  const data = new Products(req.body);
  const result = await data.save();
  res.send(req.body);
  console.log(result);
});

app.get("/list", async (req, resp) => {
  const data = await Products.find({});
  resp.send(data);
  console.log(data);
});



app.delete("/delete/:_id", async (req, resp) => {
  try {
    const result = await Products.deleteOne(req.params);
    console.log(result);
    resp.send(result);
  } catch (error) {
    console.error(error);
    resp
      .status(500)
      .send({ error: "An error occurred while deleting the product." });
  }
});

app.listen(PORT, () => {
  console.log(`server is runnig on ${PORT}`);
});
