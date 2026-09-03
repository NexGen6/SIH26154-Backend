const express = require('express');


const app = express();

app.get('/' , (req, res) => {
     res.send('server is ready')
})
app.get('/testing' , (req, res) => {
     res.send('second page for testing')
})


module.exports = app 