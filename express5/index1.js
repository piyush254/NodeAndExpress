const mongoose = require('mongoose')

const main = async ()=>{
  await mongoose.connect("mongodb://0.0.0.0:27017/e-com")
  const ProductSchema = new mongoose.Schema({
    name : String ,
    price : Number ,
    brand : String ,
    Catogery : String
  });

  const ProductModel = mongoose.model('products' , ProductSchema)
  let data = new ProductModel({name : "M10" , price : 1000 ,brand : "Samsung" , Catogery : "mobile" })
  let result = await data.save();
  console.log(result)

}

main();