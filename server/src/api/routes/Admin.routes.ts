import { Router } from "express";
import DeleteShortUrlById from "../controllers/DeleteShortUrlById.controller";
import FetchShortUrlsById from "../controllers/FetchShortUrlById.controller";
import FetchShortUrlsAll from "../controllers/FetchShortUrlsAll.controllers";
import UpdateShortUrlsById from "../controllers/UpdateShortUrlById.controller";

const AdminRoutes: Router = Router();

AdminRoutes.get("/all", FetchShortUrlsAll);

AdminRoutes.get("/url/:id", FetchShortUrlsById);

AdminRoutes.delete("/delete/:id", DeleteShortUrlById);

AdminRoutes.put("/update/:id", UpdateShortUrlsById);

export default AdminRoutes;
