const mongoose = require('mongoose')

const update = async () =>{
  await mongoose.connect("mongodb://0.0.0.0:27017/e-com")
  const ProductSchema = new mongoose.Schema({
    name : String ,
    price : Number ,
    brand : String , 
    Catogery : String
  })

  const ProductModel = mongoose.model('products',ProductSchema);
  const data = await ProductModel.updateOne(
    {name: "M10"},
    {
      $set : {price : 12000}
    }
  )
  console.log(data);
}


// update().catch((err) =>{
//   console.log(err)
// })


const deleteOne = async () =>{
  await mongoose.connect("mongodb://0.0.0.0:27017/e-com")
  const ProductSchema = mongoose.Schema({
    name : String ,
    price : Number ,
    brand : String , 
    Catogery : String
  })
  const ProductModel = mongoose.model('products', ProductSchema);

  const data = await ProductModel.deleteOne({name : "iphone18"})

  // const data = new ProductModel ({
  //   name : "iphone18",
  //   price : 150000 ,
  //   brand : "Apple",
  //   Catogery : "Phone"
  // })
  // const Savedata = await data.save()
  console.log(data);
}

deleteOne().catch(err => {
  console.log(err)
})