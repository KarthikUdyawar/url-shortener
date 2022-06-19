import { Document } from "mongoose";

interface IShortUrl extends Document {
  short: string;
  long: string;
  createdAt: Date;
}

export default IShortUrl;
