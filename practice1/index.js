const app = require("./app");
const fs = require('fs')


console.log(app.z());

let arr = [2, 3, 4, 5, 5, 9, 10];

const result = arr.filter((num) => (num > 5));
console.log(result);
// fs, Buffer , HTTP 

fs.writeFileSync("Hello.txt" , "i am your code")

console.log("=>>",__dirname)
console.log("=>>",__filename)

fs.writeFileSync("Code.js" , "console.log()")