const express = require('express')
const app = express()
const port = 3000
const note = require('./app/routes/note');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/note', note);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})