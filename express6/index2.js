const express = require("express");
require("./config");
const Product = require("./products");

const app = express();
const PORT = 5000;
app.use(express.json());

app.get("/search/:key", async (req, resp) => {
  const result = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
      { Catogery: { $regex: req.params.key } },
      ...(!isNaN(req.params.key) ? [{ price: parseInt(req.params.key) }] : []),
    ],
  });
  const obj = {
    searchKey  : req.params.key,
    status : "OK",
    result : result
  }

  resp.send(obj);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
