import { ShortUrls } from "../../models/shortURL.model";
import { Request, Response } from "express";
import ErrorHandler from "../../middleware/Handler/ErrorHandler";
import HttpException from "../../middleware/Exceptions/HttpException";
import IMessage from "../interfaces/IMessage";
import IResponse from "../interfaces/IResponse";
import IShortUrl from "../../models/interfaces/IShortUrl";
import GetRequestProtocol from "../../utils/GetRequestProtocol";
import config from "../../../config/env";

const FetchShortUrlsAll = async (req: Request, res: Response) => {
  const msg: IMessage = { isSuccessful: false, message: "", info: null };
  const result: IResponse = { code: -1, data: msg };
  try {
    const shortUrls: Array<IShortUrl> = await ShortUrls.find({});

    const data = shortUrls.map((url) => {
      const info = {
        id: url._id,
        long: url.long,
        short: `${GetRequestProtocol()}://${config.HOST}:${config.PORT}/mini/${url.short}`,
        createdAt: url.createdAt,
      };

      return info;
    });

    msg.isSuccessful = true;
    result.code = 200;
    msg.message = `Successfully Fetch all short URL`;
    msg.info = data;

    return res.status(result.code).json(result.data);
  } catch (error) {
    if (error instanceof Error) {
      ErrorHandler(error as HttpException, res);
    }
  }
};

export default FetchShortUrlsAll;
