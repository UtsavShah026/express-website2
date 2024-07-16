const express = require('express')
const app = express()
app.use(express.static("public"));
app.get('/home', function (req, res) {
  res.sendFile(__dirname+'/views/home.html');
})
app.get('/about', function (req, res) {
    res.sendFile(__dirname+'/views/about.html');
  })
  app.get('/contact', function (req,res){
    res.sendFile(__dirname+'/views/contact.html');
  })
 
  app.get('/photo', function (req,res){
    res.sendFile(__dirname+'/views/photo.html');
  })
 
app.listen(3000)