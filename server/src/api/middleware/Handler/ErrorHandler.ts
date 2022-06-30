import { Response } from "express";
import HttpStatus from "../../utils/HttpStatus";
import HttpException from "../Exceptions/HttpException";

function ErrorHandler(error: HttpException, res: Response) {
  const isSuccessful = error.isSuccessful || false;
  const status = error.status || HttpStatus.serverError;
  const message = error.message || "Server Error";
  const info = error.stack || "Something went wrong";
  res.status(status).send({
    isSuccessful,
    status,
    message,
    info,
  });
}

export default ErrorHandler;
