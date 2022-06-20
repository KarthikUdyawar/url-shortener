import IShortUrl from "../models/interfaces/IShortUrl";
import { ShortUrls } from "../models/shortURL.model";
import { Response } from "express";
import IRequest from "./interfaces/IRequest";
import IReqParams from "./interfaces/IReqParams";
import IMessage from "./interfaces/IMessage";
import IResponse from "./interfaces/IResponse";

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
      result.code = 301;
      msg.message = `Successfully Redirected short URL to its destination`;
      msg.info = data.long;
      return res.redirect(result.code, msg.info);
    } else {
      msg.isSuccessful = false;
      result.code = 404;
      msg.message = `404 Not Found`;
      msg.info = `Could not find the long link for this short link ${id}`;
      return res.status(result.code).json(result.data);
    }
  } catch (error) {
    if (error instanceof Error) {
      msg.isSuccessful = false;
      result.code = 500;
      msg.message = error.name;
      msg.info = error.message;
    }

    return res.status(result.code).json(result.data);
  }
};

export default RedirectShortUrl;
