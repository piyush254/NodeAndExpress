const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password12',
  database: 'nodepractice'
})

connection.connect((err)=>{
    if(!err) console.log("Connection successful")
      else {
        console.warn(err)
    }
})


module.exports = connection