import IMessage from "../interfaces/IMessage";
import IResponse from "../interfaces/IResponse";
import { Request, Response } from "express";
import ErrorHandler from "../../middleware/Handler/ErrorHandler";
import HttpException from "../../middleware/Exceptions/HttpException";
import jwt from "jsonwebtoken";

const AdminLogout = async (req: Request, res: Response) => {
  const msg: IMessage = { isSuccessful: false, message: "", info: null };
  const result: IResponse = { code: -1, data: msg };
  let token = "";
  try {
    const reqToken: string | undefined = req.headers.authorization;
    if (reqToken) {
      token = reqToken.split(" ")[1];
      jwt.sign(token, "", { expiresIn: 0 }, (logout, error) => {
        if (logout) {
          msg.isSuccessful = true;
          result.code = 200;
          msg.message = `Successfully Logout`;
          msg.info = logout;
        } else {
          msg.isSuccessful = false;
          result.code = 404;
          msg.message = `Failed  Logout`;
          msg.info = error;
        }
      });
    }

    return res.status(result.code).json(result.data).end();
  } catch (error) {
    if (error instanceof Error) {
      ErrorHandler(error as HttpException, res);
    }
  }
};

export default AdminLogout;
