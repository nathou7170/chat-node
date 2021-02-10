const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
  console.log('user connected');
  socket.on("chat", function(msg) {
    io.emit("chat", msg);
  });
});

io.on("disconnected", function() {
  console.log("user is disconnected !");
});

http.listen(3000, function() {
  console.log("Listening on localhost:3000");
});
