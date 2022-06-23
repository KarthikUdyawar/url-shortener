import { Router } from "express";
import DeleteShortUrlById from "../controllers/DeleteShortUrlById.controller";
import FetchShortUrlsById from "../controllers/FetchShortUrlById.controller";
import FetchShortUrlsAll from "../controllers/FetchShortUrlsAll.controllers";

const AdminRoutes: Router = Router();

AdminRoutes.get("/all", FetchShortUrlsAll);

AdminRoutes.get("/:id", FetchShortUrlsById);

AdminRoutes.delete("/delete/:id", DeleteShortUrlById);

export default AdminRoutes;
