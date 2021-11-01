import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
	cors: { origin: "*", methods: ["GET", "POST"] },
});

io.on("connection", (socket: Socket) => {
	console.log(socket.id);
});

const PORT = 3001;

httpServer.listen(PORT, () => {
	console.log("WebSocket server started");
});
