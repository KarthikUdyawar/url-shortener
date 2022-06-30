import IAdminRequest from "../interfaces/IAdminRequest";
import IAdminReqBody from "../interfaces/IAdminReqBody";
import IResponse from "../interfaces/IResponse";
import IMessage from "../interfaces/IMessage";
import ErrorHandler from "../../middleware/Handler/ErrorHandler";
import HttpException from "../../middleware/Exceptions/HttpException";
import config from "../../../config/env";
import { Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";


const AdminLogin = async (req: IAdminRequest, res: Response) => {
  const msg: IMessage = { isSuccessful: false, message: "", info: null };
  const result: IResponse = { code: -1, data: msg };
  const ADMIN_NAME: string = config?.ADMIN_NAME ?? "";
  const ADMIN_PASSWORD: string = config?.ADMIN_PASSWORD ?? "";
  const JWT_SECRET: string = config?.JWT_SECRET ?? "";

  try {
    const { name, password }: IAdminReqBody = req.body;
    if (name !== ADMIN_NAME) {
      msg.isSuccessful = false;
      result.code = 404;
      msg.message = `Failed login`;
      msg.info = "Admin name not found";
    }
    const isMatch = await bcrypt.compareSync(ADMIN_PASSWORD, password);
    if (!isMatch) {
      msg.isSuccessful = false;
      result.code = 404;
      msg.message = `Failed login`;
      msg.info = "Admin password does not match";
    }
    const payload = {
      name,
      session: nanoid(10),
    };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
    msg.isSuccessful = true;
    result.code = 200;
    msg.message = `Successfully Login`;
    msg.info = token;

    return res.status(result.code).json(result.data);
  } catch (error) {
    if (error instanceof Error) {
      ErrorHandler(error as HttpException, res);
    }
  }
};

export default AdminLogin;
