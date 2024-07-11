const express = require('express')
const app = express();
const mongoose = require('mongoose')

const PORT = 5000;
const connectDB = async ()=>{
  mongoose.connect("mongodb://0.0.0.0:27017/e-com")
  const ProductSchema = new mongoose.Schema({})
  const ProductModel = mongoose.model('products', ProductSchema);
  const data =await ProductModel.find({})
  console.log(data)
}
connectDB()
app.get('/' , (req , resp ) => {
  resp.send("Application is working")
})

app.listen(PORT , () => {
  console.log(`Your applcation is rinning in ${PORT}`)
})