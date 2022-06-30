import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import config from "../../../config/env";
import ErrorHandler from "./ErrorHandler";
import HttpException from "../Exceptions/HttpException";
import IMessage from "../../controllers/interfaces/IMessage";
import IResponse from "../../controllers/interfaces/IResponse";
import GetRequestProtocol from "../../utils/GetRequestProtocol";
import HttpStatus from "../../utils/HttpStatus";

const VerificationHandler = async (req: Request, res: Response, next: NextFunction) => {
  // Get token from header
  // const token = req.header("x-auth-token");
  let token = "";
  const reqToken: string | undefined = req.headers.authorization;
  const JWT_SECRET: string = config?.JWT_SECRET ?? "";
  const msg: IMessage = { isSuccessful: false, message: "", info: null };
  const result: IResponse = { code: -1, data: msg };

  if (reqToken) token = reqToken.split(" ")[1];
  // Check if no token
  if (!token) {
    msg.isSuccessful = false;
    result.code = 401;
    msg.message = `Token not found`;
    msg.info = "Token was not provided";
    return res.status(result.code).json(result.data).end();
    // return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify token
  try {
    jwt.verify(token, JWT_SECRET, (error, decoded) => {
      if (error) {
        msg.isSuccessful = false;
        result.code = HttpStatus.movedPermanently;
        msg.message = `Token not found`;
        msg.info = `${GetRequestProtocol()}://${config.HOST}:${config.PORT}/admin/index.html`;
        return res.redirect(result.code, msg.info);
        // return res.status(result.code).json(result.data).end();
        // return res.status(401).json({ msg: "Token is not valid" });
      } else {
        msg.isSuccessful = true;
        result.code = HttpStatus.OK;
        msg.message = `Token found`;
        msg.info = decoded;
        next();
        // return res.status(result.code).json(result.data);
        // decoded = decoded;
      }
    });
  } catch (error) {
    if (error instanceof Error) {
      ErrorHandler(error as HttpException, res);
    }
  }
};

export default VerificationHandler;
