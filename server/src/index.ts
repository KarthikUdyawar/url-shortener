import Database from "./config/database";
import config from "./config/env";
import express, { Application } from "express";
import http from "http";
import routers from "./api/routes/ShortURL.routes";
import { Headers } from "./api/middleware/Headers";
import Logger from "./api/middleware/Logger";

// Boot express
const app: Application = express();

// Request middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware
app.use(Headers);
app.options("*", Headers);

app.use(Logger);

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
