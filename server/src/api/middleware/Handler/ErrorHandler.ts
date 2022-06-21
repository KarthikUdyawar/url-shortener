import { Request, Response } from "express";
import HttpException from "../Exceptions/HttpException";

function ErrorHandler(error: HttpException, req: Request, res: Response) {
  const status = error.status || 500;
  const message = error.message || "Server Error";
  const info = error.stack || "Something went wrong";
  res.status(status).send({
    status,
    message,
    info,
  });
}

export default ErrorHandler;
