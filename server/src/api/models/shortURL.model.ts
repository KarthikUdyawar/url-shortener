import { Schema, model } from "mongoose";
import { IShortUrl } from "./interfaces/IShortUrl";

const ShortUrlSchema = new Schema<IShortUrl>(
  {
    short: { type: String, required: true, unique: true, maxLength: 6 },
    long: { type: String, required: true },
    createdAt: {
      type: Date,
      expires: 60 * 60 * 24 * 30,
      default: new Date(),
    },
  },
  { collection: "urls" },
);

export const ShortUrls = model<IShortUrl>("ShortUrls", ShortUrlSchema);
