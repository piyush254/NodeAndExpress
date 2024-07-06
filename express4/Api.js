const express = require("express");
const dbConnect = require("./mongoDB");

const mongoDB  = require("mongodb")

const app = express();

const PORT = 5000;

app.use(express.json());

app.get("/", async (req, resp) => {
  let data = await dbConnect();
  let result = await data.find().toArray();
  console.log(result);
  resp.send(result);
});

app.post("/", async (req, resp) => {
  console.log("receive",req.body)
  let data = await dbConnect();
  console.log("send",req.body)
  resp.send(req.body);
  let result = await data.insertOne(req.body)
  // console.log(req.body);
  // resp.send({name:"Piyush"})
});

app.put('/:name', async (req, res) =>{
  let data = await dbConnect();
  let result = await data.updateOne({name : req.params.name } , {$set : req.body })
  res.send(req.body)
})

app.delete('/:_id' , async (req, resp) =>{
  let data = await dbConnect();
  let result = await data.deleteOne({id : new mongoDB.ObjectId( req.params._id)})
  resp.send(result)
})

app.listen(PORT, () => {
  console.warn(`App is running in ${PORT}`);
});
