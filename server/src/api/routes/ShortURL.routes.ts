import { Router } from "express";
import TestApi from "../controllers/Test.controller";
import CreateShortUrl from "../controllers/ShortURL/CreateShortUrl.controller";
import RedirectShortUrl from "../controllers/ShortURL/RedirectShortUrl.controller";

const ShortUrlRoutes: Router = Router();

ShortUrlRoutes.get("/test", TestApi);

ShortUrlRoutes.post("/create", CreateShortUrl);

ShortUrlRoutes.get("/mini/:id", RedirectShortUrl);

export default ShortUrlRoutes;
