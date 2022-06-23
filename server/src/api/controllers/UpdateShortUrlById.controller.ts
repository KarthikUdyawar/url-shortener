import { ShortUrls } from "../models/shortURL.model";
import { Response } from "express";
import ErrorHandler from "../middleware/Handler/ErrorHandler";
import HttpException from "../middleware/Exceptions/HttpException";
import IMessage from "./interfaces/IMessage";
import IResponse from "./interfaces/IResponse";
import IRequest from "./interfaces/IRequest";
import IReqParams from "./interfaces/IReqParams";
import IReqBody from "./interfaces/IReqBody";

const UpdateShortUrlsById = async (req: IRequest, res: Response) => {
  const msg: IMessage = { isSuccessful: false, message: "", info: null };
  const result: IResponse = { code: -1, data: msg };
  try {
    const { id }: IReqParams = req.params;
    const { short, long }: IReqBody = req.body;

    const urls = await ShortUrls.find({ short });

    if (urls.length) {
      msg.isSuccessful = false;
      result.code = 409;
      msg.message = `Short URL already exist`;
      msg.info = urls;

      return res.status(result.code).json(result.data);
    }

    const newShortUrl = await ShortUrls.findByIdAndUpdate(
      id,
      { short, long, createdAt: Date.now() },
      {
        new: true,
      },
    );

    msg.isSuccessful = true;
    result.code = 200;
    msg.message = `Successfully Updated URL by id`;
    msg.info = newShortUrl;

    return res.status(result.code).json(result.data);
  } catch (error) {
    if (error instanceof Error) {
      ErrorHandler(error as HttpException, res);
    }
  }
};

export default UpdateShortUrlsById;
