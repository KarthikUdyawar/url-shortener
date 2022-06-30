import { Response } from "express";
import HttpException from "../../middleware/Exceptions/HttpException";
import ErrorHandler from "../../middleware/Handler/ErrorHandler";
import bcrypt from "bcrypt";
import IReqParams from "../interfaces/IReqParams";
import IRequest from "../interfaces/IRequest";

const HashApi = async (req: IRequest, res: Response) => {
  try {
    const { id }: IReqParams = req.params;
    console.log(id);
    const hash = await bcrypt.hashSync(id, 10);
    return res.json({ hash });
  } catch (error) {
    if (error instanceof Error) {
      ErrorHandler(error as HttpException, res);
    }
  }
};

export default HashApi;
