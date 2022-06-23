import { Router } from "express";
import FetchShortUrlsById from "../controllers/FetchShortUrlById.controller";
import FetchShortUrlsAll from "../controllers/FetchShortUrlsAll.controllers";

const AdminRoutes: Router = Router();

AdminRoutes.get("/all", FetchShortUrlsAll);

AdminRoutes.get("/:id", FetchShortUrlsById);

export default AdminRoutes;
