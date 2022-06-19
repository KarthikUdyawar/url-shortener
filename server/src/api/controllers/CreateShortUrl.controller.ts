import { nanoid } from "nanoid";
import { ShortUrls } from "../models/shortURL.model";
import ICreateReqBody from "./interfaces/ICreateReqBody";
import IErrorMessage from "./interfaces/IErrorMessage";
import { Response, Request } from "express";

const CreateShortUrl = async (req: Request, res: Response) => {
  const { long }: ICreateReqBody = req.body;

  try {
    const newShortUrl = await ShortUrls.create({
      long: long,
      short: nanoid(6),
    });

    return res.json({ url: newShortUrl });
  } catch (error) {
    const errorMessage: IErrorMessage = { code: -1, message: "" };

    if (error instanceof Error) {
      errorMessage.code = 500;
      errorMessage.message = error.message;
    }

    return res.json({ error: errorMessage });
  }
};

export default CreateShortUrl;
