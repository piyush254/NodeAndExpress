const dbConnect = require('./mongoDB')
const colors = require('colors')

const deletedata =async () =>{
  const db = await dbConnect()
  const result =await db.deleteOne({name : "Piyush"})
  // console.warn(result);
  if(result.acknowledged){  
    if(result.deletedCount){
      console.warn("data deleted Successfully".red);
    }else{
      console.warn("No data found in your database".yellow);
    }
  }
}

deletedata();