import Database from "./config/database";
import config from "./config/env";
import express, { Application } from "express";
import http from "http";
import { Headers } from "./api/middleware/Headers";
import Logger from "./api/middleware/Logger";
import ShortUrlRoutes from "./api/routes/ShortURL.routes";
import { AdminRoutesProtective, AdminRoutesUnProtective } from "./api/routes/Admin.routes";

import path from "path";
import VerificationHandler from "./api/middleware/Handler/VerificationHandler";
import HelperRoutes from "./api/routes/Helper.routes";

// Boot express
const app: Application = express();
app.use("/admin", express.static(path.join(__dirname, "static")));

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

app.use("/", ShortUrlRoutes);
app.use("/helper", HelperRoutes);
app.use("/admin", AdminRoutesUnProtective);
app.use("/admin", VerificationHandler, AdminRoutesProtective);
