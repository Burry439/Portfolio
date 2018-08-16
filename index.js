var express = require('express');
var app = express();


app.use(express.static('dist'));
app.use(express.static('node_modules'));



app.listen(process.env.PORT || 8000, function() {
    console.log("yo yo yo, on 8000!!")
  })