import { Router } from "express";
import TestApi from "../controllers/Test.controller";
import CreateShortUrl from "../controllers/CreateShortUrl.controller";
import RedirectShortUrl from "../controllers/RedirectShortUrl.controller";

const router: Router = Router();

router.get("/test", TestApi);

router.post("/create", CreateShortUrl);

router.get("/:id", RedirectShortUrl);

export default router;
