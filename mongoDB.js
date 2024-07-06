const { MongoClient } = require("mongodb");

// Universal network accessblity
// https://youtu.be/ANeOfRDPOfw?si=SF8mwGQKVkXweG8m

const url = "mongodb://0.0.0.0:27017";

const dataBase = "e-com";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  console.log("Connected successfully to server");
  let db = result.db(dataBase);
  return db.collection("products");

  // let response = await collection.find({}).toArray();
  // console.log(response)
  // response.forEach((data)=>{
  //   console.log(data.name);
  // })
}


module.exports = dbConnect ;