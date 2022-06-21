import config from "../../config/env";

const GetRequestProtocol = (): string => {
  switch (config.ENV) {
    case "development":
      return "http";

    default:
      return "https";
  }
};

export default GetRequestProtocol;
