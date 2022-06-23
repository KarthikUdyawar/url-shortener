import { Router } from "express";
import TestApi from "../controllers/Test.controller";
import CreateShortUrl from "../controllers/CreateShortUrl.controller";
import RedirectShortUrl from "../controllers/RedirectShortUrl.controller";

const ShortUrlRoutes: Router = Router();

ShortUrlRoutes.get("/test", TestApi);

ShortUrlRoutes.post("/create", CreateShortUrl);

ShortUrlRoutes.get("/mini/:id", RedirectShortUrl);

export default ShortUrlRoutes;
