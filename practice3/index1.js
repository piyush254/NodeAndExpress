/*
const fs = require('fs')
const path = require ('path')
const dirpath = path.join(__dirname , 'crud')
const filepath = `${dirpath}/apple.txt`

// fs.writeFileSync(filepath,'This is a simple text File');


fs.readFile(filepath  ,'utf8', (err , item) => {
  console.warn(item)
})

// fs.appendFile(filepath , 'This is given command by appendFile' , (err)=>{
//   if(!err){
//     console.warn('File is updated');
//   }
// })


// fs.rename(filepath ,`${dirpath}/fruit.txt` , (err)=>{
//   if(!err){
//     console.warn('File is updated');
//   }
// })

fs.unlinkSync(`${dirpath}/fruit.txt`)

*/

/*
let a = 10;
let b = 0;
console.log("Executon 1 ");

console.log("Executon 3 ");

const data = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Executon 2 ");
    resolve(30);
  }, 2000);
});

data.then((newdata) => {
  b = newdata;
  console.log(a + b);
});

async function getData (){
  const mydata = await data;
  b = mydata;
  console.log(`This is the result of async function ${a+b}`)
}

getData() ;


*/

const express = require("express");
const app = express();

const PORT = 5000;

app.get("", (req, res) => {
  console.log(req.query.name)
  res.send("Welcome "+req.query.name);
});

app.get("/About", (req, res) => {
  res.send("Hello This is about page");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
