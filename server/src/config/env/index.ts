// imports
import dotenv from "dotenv";
import IConfig from "./Interfaces/IConfig";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../", "../", "../", ".env") });

const NODE_ENV: string = process.env.NODE_ENV ?? "";

let HOST = "";
let PORT = -1;
let DB_URI = "";
let ENV_ERROR = "";

let config: IConfig = {
  ENV: "",
  PORT: -1,
  HOST: "",
  DB_URI: "",
  ENV_ERROR: "",
};

switch (NODE_ENV) {
  case "production":
    HOST = process.env.PRO_HOST ?? "";
    PORT = parseInt(process.env.PRO_PORT ?? "-1");
    DB_URI = process.env.PRO_DB_URI ?? "";
    ENV_ERROR = "";

    break;

  case "development":
    HOST = process.env.DEV_HOST ?? "";
    PORT = parseInt(process.env.DEV_PORT ?? "-1");
    DB_URI = process.env.DEV_DB_URI ?? "";
    ENV_ERROR = "";

    break;

  default:
    PORT = -1;
    HOST = "";
    DB_URI = "";
    ENV_ERROR = "Invalid Environment";
}

if (PORT && HOST && DB_URI) {
  config = {
    ENV: NODE_ENV,
    PORT,
    HOST,
    DB_URI,
    ENV_ERROR,
  };
} else if (ENV_ERROR) {
  config = {
    ENV: "",
    PORT,
    HOST,
    DB_URI,
    ENV_ERROR,
  };
}

export default config;
