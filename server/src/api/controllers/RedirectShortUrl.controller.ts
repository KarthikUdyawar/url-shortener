import IShortUrl from "../models/interfaces/IShortUrl";
import { ShortUrls } from "../models/shortURL.model";
import IErrorMessage from "./interfaces/IErrorMessage";
import { Response } from "express";
import IRequest from "./interfaces/IRequest";
import IReqParams from "./interfaces/IReqParams";

const RedirectShortUrl = async (req: IRequest, res: Response) => {
  const { id }: IReqParams = req.params;
  const errorMessage: IErrorMessage = { code: -1, message: "" };

  try {
    const shortUrl: IShortUrl | null = await ShortUrls.findOne({ slug: id });

    const data = {
      long: shortUrl!.long,
    };

    return res.redirect(301, data.long);
  } catch (error) {
    if (error instanceof Error) {
      errorMessage.code = 500;
      errorMessage.message = error.message;
    }

    return res.json({ error: errorMessage });
  }
};

export default RedirectShortUrl;
