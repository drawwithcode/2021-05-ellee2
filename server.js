console.log("up and running")

let express = require('express')

let app = express();

let port = 3000;

let server = app.listen(port);


app.use(express.static('public'));

let serverSocket = require('socket.io');

let io = serverSocket(server);

io.on('connection', newConnection);

function newConnection(newSocket) {
    console.log("new connection:", newSocket.id);

    newSocket.on("mouse", mouseMessage);
    function mouseMessage(dataReceived) {
        console.log(dataReceived);
    
        newSocket.broadcast.emit("mouseBroadcast", dataReceived);
    }
  }
  