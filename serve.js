var express = require('express');
var app = express()
var bodyParser= require('body-parser')
var sock = require('socket.io')()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send', function(req,res){
	res.send('error')
	console.log('received request ', req.body)
})

app.post('/create_room', function(req,res){
	res.send('ok')
	console.log('received request ', req.body)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
