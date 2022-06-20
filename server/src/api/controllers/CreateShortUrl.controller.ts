import { nanoid } from "nanoid";
import { ShortUrls } from "../models/shortURL.model";
import ICreateReqBody from "./interfaces/ICreateReqBody";
import IErrorMessage from "./interfaces/IErrorMessage";
import { Response, Request } from "express";
import IShortUrl from "../models/interfaces/IShortUrl";

const CreateShortUrl = async (req: Request, res: Response) => {
  const errorMessage: IErrorMessage = { code: -1, message: "" };
  try {
    const { long }: ICreateReqBody = req.body;

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
      return res.json({ url: newShortUrl });
    } else {
      const newShortUrl = await ShortUrls.create({
        long,
        short: nanoid(6),
      });

      return res.json({ url: newShortUrl });
    }
  } catch (error) {
    if (error instanceof Error) {
      errorMessage.code = 500;
      errorMessage.message = error.message;
    }

    return res.json({ error: errorMessage });
  }
};

export default CreateShortUrl;
