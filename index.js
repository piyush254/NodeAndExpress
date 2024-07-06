const dbConnect =require('./mongoDB')

/*
dbConnect().then((res)=>{
  res.find({}).toArray().then((data)=>{
    console.warn(data);
  })
})
*/

const main = async () => {
  let data = await dbConnect();
  data = await data.find({}).toArray()
  console.warn(data);
}
main();
// console.warn(dbConnect());
