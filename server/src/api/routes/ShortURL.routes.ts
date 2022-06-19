import { Router } from "express";
import TestApi from "../controllers/test.controller";
import CreateShortUrl from "../controllers/CreateShortUrl.controller";

const router: Router = Router();

router.get("/test", TestApi);

router.post("/create", CreateShortUrl);

export default router;
