const express = require('express')
const app = express();

const PORT = 5000;

app.get('/' , (req , resp ) => {
  resp.send("Application is working")
})

app.listen(PORT , () => {
  console.log(`Your applcation is rinning in ${PORT}`)
})