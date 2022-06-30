import { Router } from "express";
import CreateShortUrl from "../controllers/ShortURL/CreateShortUrl.controller";
import RedirectShortUrl from "../controllers/ShortURL/RedirectShortUrl.controller";

const ShortUrlRoutes: Router = Router();

ShortUrlRoutes.post("/create", CreateShortUrl);

ShortUrlRoutes.get("/mini/:id", RedirectShortUrl);

export default ShortUrlRoutes;
