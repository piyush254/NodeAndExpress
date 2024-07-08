# important Point 
## This is for the access of id from mongoDB
```javascript
const mongoDB = require("mongodb");

{
  id: new mongoDB.ObjectId(req.params._id)
} 
```
## multer
```javascript
const upload = multer({
  storage : multer.diskStorage({
    destination : function(req,file ,cb){
      cb(null , "uploads")
    },
    filename : function (req , file , cb){
      cb(null , file.fieldname +"-" + Date.now()+".jpg")
    }
  })
}).single('user_file')

```
## Connection with mysql

```javascript
const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password12',
  database: 'nodepractice'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting: \n' + err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
});

const quary = 'select * from users;'
connection.query(quary, (error, results, fields) => {
  if (error) throw error;
  console.log(`${quary}`)
  console.log(typeof(results))
  results.forEach((result)=>{
    console.log(`${JSON.stringify(result)}`);
  })
  console.log(`Results: `,results);
});
connection.end();

```