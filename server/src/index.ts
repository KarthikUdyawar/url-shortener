import Database from "./config/database";
import config from "./config/env";
import express, { Application } from "express";
import http from "http";
import routers from "./api/routes/ShortURL.routes";

// Boot express
const app: Application = express();

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

app.use("/", routers);
