import Database from "./config/database";
import config from "./config/env";
import express, { Application, Request, Response } from "express";
import http from "http";

// Boot express
const app: Application = express();

// API test
app.use("/", (req: Request, res: Response) => {
  res.status(200).send({ message: "API is running successfully" });
});

// Database connection
Promise.resolve(new Database().conn())
  .then(() => {
    const httpServer: http.Server = http.createServer(app);

    const { PORT, HOST, ENV } = config;

    httpServer.listen(PORT, HOST, () => {
      console.log(`Server hosted in ${ENV} mode, on http://${HOST}:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Connection Error: ", error);
  });
