const express = require('express');
const app = express();
const http = require('http');
const port = 4000;
const { Server } = require('socket.io');
const cors = require('cors');

const server = http.createServer(app);
app.use(express.json());

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.use((req, res, next)=>{
    res.on("finish",()=>{
        console.log(`${req.method} ${req.originalUrl} ${req.statusCode} `);
    });
    next();
});

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PATCH", "DELETE"]
    }
})

io.on("connection", (socket) => {
    console.log(`user connected: ${socket.id}`);

    socket.on("send_message", (data) => {
        socket.broadcast.emit("receive_message", data);
    })

    socket.on("joinRoom", (roomId) => {
        socket.join(roomId);
        const rooms = [...socket.rooms];  // Convert the Set to an array
        console.log(`Socket is in rooms: ${rooms}, which is supposed to be ${roomId}`);
    });
    
})

// Routes
const pokeRouter = require("./routes/pokemon");

// Setting up ways to call the route
app.use("/api/pokemon", pokeRouter);