const { log } = require('console');
const express = require('express')
const os = require('os')
const app = express();
const PORT = 5000


console.log(os.arch())
console.log(os.freemem()/(1024*1024*1024));
console.log(os.totalmem()/(1024*1024*1024)); 
console.log(os.hostname())
console.log(os.platform())
console.log(os.userInfo())


app.get('/', (req , res) =>{
    res.send("Your app is running fine")
})

app.listen(PORT, ()=>{
console.log(`Server is runnign on port ${PORT}`)
})