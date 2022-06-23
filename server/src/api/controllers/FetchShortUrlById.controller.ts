import { ShortUrls } from "../models/shortURL.model";
import { Response } from "express";
import ErrorHandler from "../middleware/Handler/ErrorHandler";
import HttpException from "../middleware/Exceptions/HttpException";
import IMessage from "./interfaces/IMessage";
import IResponse from "./interfaces/IResponse";
import IShortUrl from "../models/interfaces/IShortUrl";
import GetRequestProtocol from "../utils/GetRequestProtocol";
import config from "../../config/env";
import IRequest from "./interfaces/IRequest";
import IReqParams from "./interfaces/IReqParams";

const FetchShortUrlsById = async (req: IRequest, res: Response) => {
  const msg: IMessage = { isSuccessful: false, message: "", info: null };
  const result: IResponse = { code: -1, data: msg };
  try {
    const { id }: IReqParams = req.params;
    const shortUrls: IShortUrl | null = await ShortUrls.findById(id);
    const data = {
      id: shortUrls?._id ?? null,
      long: shortUrls?.long ?? null,
      short:
        `${GetRequestProtocol()}://${config.HOST}:${config.PORT}/mini/${shortUrls?.short}` ?? null,
      createdAt: shortUrls?.createdAt ?? null,
    };

    msg.isSuccessful = true;
    result.code = 200;
    msg.message = `Successfully Fetch short URL by id`;
    msg.info = data;

    return res.status(result.code).json(result.data);
  } catch (error) {
    if (error instanceof Error) {
      ErrorHandler(error as HttpException, res);
    }
  }
};

export default FetchShortUrlsById;
