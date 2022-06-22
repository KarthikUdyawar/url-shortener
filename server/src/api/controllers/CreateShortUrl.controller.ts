import { nanoid } from "nanoid";
import { ShortUrls } from "../models/shortURL.model";
import { Response } from "express";
import IShortUrl from "../models/interfaces/IShortUrl";
import IRequest from "./interfaces/IRequest";
import IReqBody from "./interfaces/IReqBody";
import IResponse from "./interfaces/IResponse";
import IMessage from "./interfaces/IMessage";
import ErrorHandler from "../middleware/Handler/ErrorHandler";
import HttpException from "../middleware/Exceptions/HttpException";

const CreateShortUrl = async (req: IRequest, res: Response) => {
  const msg: IMessage = { isSuccessful: false, message: "", info: null };
  const result: IResponse = { code: -1, data: msg };
  try {
    const { long }: IReqBody = req.body;

    const shortUrl: IShortUrl | null = await ShortUrls.findOne({ long });

    if (shortUrl) {
      const newShortUrl = await ShortUrls.findOneAndUpdate(
        { long },
        {
          createdAt: Date.now(),
        },
        {
          new: true,
        },
      );

      msg.message = `Successfully Updated existing short URL`;
      msg.info = newShortUrl;
    } else {
      const newShortUrl = await ShortUrls.create({
        long,
        short: nanoid(6),
      });

      msg.message = `Successfully Created new short URL`;
      msg.info = newShortUrl;
    }

    msg.isSuccessful = true;
    result.code = 200;

    return res.status(result.code).json(result.data);
  } catch (error) {
    if (error instanceof Error) {
      ErrorHandler(error as HttpException, res);
    }
  }
};

export default CreateShortUrl;
