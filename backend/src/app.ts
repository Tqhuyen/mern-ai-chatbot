import exp from "constants";
import express from "express";
import {config} from "dotenv";
import net from "net";
import os from "os";
import morgan from "morgan";
import appRouter from "./routes/index.js";

config();
const app = express();
app.use(express.json())

app.use("/app", appRouter);

app.use(morgan("dev"));

app.get("/index", (req, res, next)=>{
  res
});

export default app;