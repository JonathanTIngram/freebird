const express = require('express')
const app = express()
const port = 3000
const { exec } = require("child_process");


const path = require('path')
app.use(express.static(__dirname + '/client'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})