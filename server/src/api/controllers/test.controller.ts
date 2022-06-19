import { Response, Request } from "express";

const TestApi = async (req: Request, res: Response) => {
  return res.json({ message: "API is running successfully" });
};

export default TestApi;
