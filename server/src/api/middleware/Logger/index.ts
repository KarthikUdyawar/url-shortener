import morgan from "morgan";
import config from "../../../config/env";

const logType = (): string => {
  switch (config.ENV) {
    case "development":
      return "dev";

    default:
      return "combined";
  }
};

const Logger = morgan(logType());

export default Logger;
