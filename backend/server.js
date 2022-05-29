const express = require("express");
const ConnectDb = require("./config/ConnectDb");
const AuthRoute = require("./routes/auth");
const ServiceRoute = require("./routes/service");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const DemandeRoute = require("./routes/demande");
const FeedbackRoute = require("./routes/Feedbacks");
const passwordResetRoutes = require("./routes/resetPassword");
const app = express();
app.use(express.json());
ConnectDb();
app.use("/api/auth", AuthRoute);
app.use("/api/Service", ServiceRoute);
app.use("/api/Demande", DemandeRoute);
app.use("/api/FeedBack", FeedbackRoute);
app.use("/api/password-reset", passwordResetRoutes);
app.use(cors());
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
const passwordReset = require("./routes/resetPassword");
const users = require("./routes/user");
//.....

app.use(express.json());

app.use("/api/users", users);
app.use("/api/password-reset", passwordReset);