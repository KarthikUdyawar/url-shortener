import { ShortUrls } from "../../models/shortURL.model";
import { Response } from "express";
import ErrorHandler from "../../middleware/Handler/ErrorHandler";
import HttpException from "../../middleware/Exceptions/HttpException";
import IMessage from "../interfaces/IMessage";
import IResponse from "../interfaces/IResponse";
import IShortUrl from "../../models/interfaces/IShortUrl";
import IRequest from "../interfaces/IRequest";
import IReqParams from "../interfaces/IReqParams";
import HttpStatus from "../../utils/HttpStatus";

const DeleteShortUrlById = async (req: IRequest, res: Response) => {
  const msg: IMessage = { isSuccessful: false, message: "", info: null };
  const result: IResponse = { code: -1, data: msg };
  try {
    const { id }: IReqParams = req.params;
    const shortUrls: IShortUrl | null = await ShortUrls.findByIdAndDelete(id);

    if (shortUrls) {
      msg.isSuccessful = true;
      result.code = HttpStatus.OK;
      msg.message = `Successfully Deleted URL by id`;
      msg.info = shortUrls;
    }

    return res.status(result.code).json(result.data);
  } catch (error) {
    if (error instanceof Error) {
      ErrorHandler(error as HttpException, res);
    }
  }
};

export default DeleteShortUrlById;
