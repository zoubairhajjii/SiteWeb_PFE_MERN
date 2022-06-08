const express = require("express");
const ConnectDb = require("./config/ConnectDb");
const AuthRoute = require("./routes/auth");
const ServiceRoute = require("./routes/service");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const DemandeRoute = require("./routes/demande");
const FeedbackRoute = require("./routes/Feedbacks");
const app = express();
app.use(cors());

app.use(express.json());
ConnectDb();
app.use("/api/auth", AuthRoute);
app.use("/api/Service", ServiceRoute);
app.use("/api/Demande", DemandeRoute);
app.use("/api/FeedBack", FeedbackRoute);
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] },
});
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room:${data}`);
  });
  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

port = 5000;

server.listen(port, () => console.log(`server is running on port ${port}`));
//.....

app.use(express.json());

