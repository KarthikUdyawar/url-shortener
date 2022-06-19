import IShortUrl from "../models/interfaces/IShortUrl";
import { ShortUrls } from "../models/shortURL.model";
import IErrorMessage from "./interfaces/IErrorMessage";
import { Response } from "express";
import IRequest from "./interfaces/IRequest";
import IReqParams from "./interfaces/IReqParams";

const RedirectShortUrl = async (req: IRequest, res: Response) => {
  const errorMessage: IErrorMessage = { code: -1, message: "" };

  try {
    const { id }: IReqParams = req.params;

    const shortUrl: IShortUrl | null = await ShortUrls.findOne({ short: id });

    const data = {
      long: shortUrl?.long ?? null,
    };

    if (data.long) {
      return res.redirect(301, data.long);
    } else {
      errorMessage.code = 404;
      errorMessage.message = `Could not find the long link for this short link ${id}`;

      return res.json({ error: errorMessage });
    }
  } catch (error) {
    if (error instanceof Error) {
      errorMessage.code = 500;
      errorMessage.message = error.message;
    }

    return res.json({ error: errorMessage });
  }
};

export default RedirectShortUrl;
