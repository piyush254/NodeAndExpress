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



