// imports
import mongoose, { ConnectOptions } from "mongoose";
import config from "../env";

class Database {
  DB_URI: string = config?.DB_URI ?? "";

  conn = (): Promise<boolean> =>
    new Promise(async (resolve, reject) => {
      try {
        await mongoose.connect(this.DB_URI, {
          useUnifiedTopology: true,
          useNewUrlParser: true,
        } as ConnectOptions);
        console.log(`Database connected successfully`);
        return resolve(true);
      } catch (error) {
        console.log(`Database connection failed`);
        return reject(error);
      }
    });
}

export default Database;
