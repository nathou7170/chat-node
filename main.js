var express = require('express');
var app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', function(req,res){
    res.sendFile(__dirname + "/index.html");
});

http.listen(3000, function(){
    console.log("localhost:3000");
});

io.on('connection', function(socket){
    console.log('connection');
    socket.on('chat', function(msg){
        io.emit('chat', msg);
    });
    socket.on('disconnect', () =>{
        console.log('disconnected');
    });
});