const express = require('express')
const app = express()

app.use(express.json())

const indexRouter = require('./routes/index')

app.use('/', indexRouter)
app.post('/register', (req,res) =>{
    if(req.body.name && req.body.email){
        res.status(200).send('awsome!');
    }
})    

app.get('/', (req, res) => {
  res.send('welcome to the app')
})

module.exports = app;