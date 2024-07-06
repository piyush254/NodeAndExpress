const http = require('http');
const { default: test } = require('node:test');




// createrServer will take function as a parameter
http.createServer((req, res) =>{
  res.write("<h1> Hello, This is Piyush Kumar </h1>")
  res.end();
}).listen(4500);

