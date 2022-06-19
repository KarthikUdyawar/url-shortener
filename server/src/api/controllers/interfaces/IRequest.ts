import IReqBody from "./IReqBody";
import IReqParams from "./IReqParams";

interface IRequest {
  params: IReqParams;
  body: IReqBody;
}

export default IRequest;
