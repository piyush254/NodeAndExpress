const dbConnect = require('./mongoDB')


const insert = async ()=>{
  const db = await dbConnect();
  const obj = [
    { name: "N73", brand: "Nokia", price: 7000 },
    { name: "Galaxy S21", brand: "Samsung", price: 50000 },
    { name: "iPhone 13", brand: "Apple", price: 80000 },
    { name: "Pixel 6", brand: "Google", price: 60000 },
    { name: "OnePlus 9", brand: "OnePlus", price: 45000 },
    { name: "Redmi Note 10", brand: "Xiaomi", price: 15000 },
    { name: "P40 Pro", brand: "Huawei", price: 70000 },
    { name: "Moto G100", brand: "Motorola", price: 35000 },
    { name: "Xperia 5", brand: "Sony", price: 50000 },
    { name: "Realme 8", brand: "Realme", price: 18000 }
  ]
  const obj2 = {
      name : "N73", brand : "Nokia" , price : 7000
    }
  const result = await db.insertOne(obj2)
  if(result. acknowledged){
    console.log("data inserted");

  }
  // console.log("Hi i am your insert function");
}

insert ();