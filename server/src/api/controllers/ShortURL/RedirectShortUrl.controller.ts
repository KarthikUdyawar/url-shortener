import IShortUrl from "../../models/interfaces/IShortUrl";
import { ShortUrls } from "../../models/shortURL.model";
import { Response } from "express";
import IRequest from "../interfaces/IRequest";
import IReqParams from "../interfaces/IReqParams";
import IMessage from "../interfaces/IMessage";
import IResponse from "../interfaces/IResponse";
import ErrorHandler from "../../middleware/Handler/ErrorHandler";
import HttpException from "../../middleware/Exceptions/HttpException";
import HttpStatus from "../../utils/HttpStatus";

const RedirectShortUrl = async (req: IRequest, res: Response) => {
  const msg: IMessage = { isSuccessful: false, message: "", info: null };
  const result: IResponse = { code: -1, data: msg };

  try {
    const { id }: IReqParams = req.params;

    const shortUrl: IShortUrl | null = await ShortUrls.findOne({ short: id });

    const data = {
      long: shortUrl?.long ?? null,
    };

    if (data.long) {
      msg.isSuccessful = true;
      result.code = HttpStatus.movedPermanently;
      msg.message = `Successfully Redirected short URL to its destination`;
      msg.info = data.long;
      return res.redirect(result.code, msg.info);
    } else {
      msg.isSuccessful = false;
      result.code = HttpStatus.notFound;
      msg.message = `404 Not Found`;
      msg.info = `Could not find the long link for this short link ${id}`;
      return res.status(result.code).json(result.data);
    }
  } catch (error) {
    if (error instanceof Error) {
      ErrorHandler(error as HttpException, res);
    }
  }
};

export default RedirectShortUrl;
