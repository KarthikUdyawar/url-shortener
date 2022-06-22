class HttpException extends Error {
  public isSuccessful: boolean;
  public status: number;
  public message: string;
  public info: string;
  constructor(isSuccessful: boolean, status: number, message: string, info: string) {
    super(message);
    this.isSuccessful = isSuccessful;
    this.status = status;
    this.message = message;
    this.info = info;
  }
}

export default HttpException;
