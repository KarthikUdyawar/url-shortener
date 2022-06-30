import IReqParams from "./IReqParams";
import IAdminReqBody from "./IAdminReqBody";

interface IAdminRequest {
  params: IReqParams;
  body: IAdminReqBody;
}

export default IAdminRequest;
