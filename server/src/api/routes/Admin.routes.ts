import { Router } from "express";
import DeleteShortUrlById from "../controllers/Admin/DeleteShortUrlById.controller";
import FetchShortUrlsById from "../controllers/Admin/FetchShortUrlById.controller";
import FetchShortUrlsAll from "../controllers/Admin/FetchShortUrlsAll.controllers";
import UpdateShortUrlsById from "../controllers/Admin/UpdateShortUrlById.controller";

const AdminRoutes: Router = Router();

AdminRoutes.get("/all", FetchShortUrlsAll);

AdminRoutes.get("/url/:id", FetchShortUrlsById);

AdminRoutes.delete("/delete/:id", DeleteShortUrlById);

AdminRoutes.put("/update/:id", UpdateShortUrlsById);

export default AdminRoutes;
