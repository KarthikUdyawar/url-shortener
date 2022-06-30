import { Router } from "express";
import TestApi from "../controllers/Helper/Test.controller";
import HashApi from "../controllers/Helper/Hash.controller";

const HelperRoutes: Router = Router();

HelperRoutes.get("/test", TestApi);

HelperRoutes.get("/hash/:id", HashApi);

export default HelperRoutes;
