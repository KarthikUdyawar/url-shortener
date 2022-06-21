class HttpException extends Error {
  public status: number;
  public message: string;
  public info: string;
  constructor(status: number, message: string, info: string) {
    super(message);
    this.status = status;
    this.message = message;
    this.info = info;
  }
}

export default HttpException;
