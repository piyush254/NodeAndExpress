## This is for the access of id from mongoDB
```javascript
const mongoDB = require("mongodb");

{
  id: new mongoDB.ObjectId(req.params._id)
}
// multer
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


// connection with mysql

const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password12',
  database: 'nodepractice'
});

```