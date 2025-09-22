import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import userRouter from "./routes/userRoutes";

const app = express();
const server = http.createServer(app)

// middleware setup

app.use(express.json({limit: "4mb"}))
app.use(cors());


//routes setup
app.use("/api/status",(req, res)=> res.send("Server is live"));
app.use("/api/auth", userRouter);

const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=> console.log("Server is running on PORT:" +PORT))