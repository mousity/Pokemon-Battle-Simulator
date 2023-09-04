const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const server = http.createServer(app);

server.listen(3000, () => {
    console.log('Server running on port 3000');
});

app.use((req,res,next)=>{
    res.on("finish",()=>{
        console.log(`${req.method} ${req.originalUrl} ${req.statusCode} `);
    });
    next();
});

app.use(express.json());

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PATCH", "DELETE"]
    }
})

