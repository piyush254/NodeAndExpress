const dbConnect = require('./mongoDB')

const update =  async ()=> {
 let data = await dbConnect();
 let result = await data.updateOne({  name: 'Realme 8' },{$set : {price:20000}});
 console.warn(result.acknowledged);
}
update();
