import { Response, Request } from "express";
import HttpException from "../middleware/Exceptions/HttpException";
import ErrorHandler from "../middleware/Handler/ErrorHandler";

const TestApi = async (req: Request, res: Response) => {
  try {
    return res.json({ message: "API is running successfully" });
  } catch (error) {
    if (error instanceof Error) {
      ErrorHandler(error as HttpException, res);
    }
  }
};

export default TestApi;
