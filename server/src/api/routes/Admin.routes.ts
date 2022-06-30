import { Router } from "express";
import AdminLogin from "../controllers/Admin/login.controller";
import DeleteShortUrlById from "../controllers/Admin/DeleteShortUrlById.controller";
import FetchShortUrlsById from "../controllers/Admin/FetchShortUrlById.controller";
import FetchShortUrlsAll from "../controllers/Admin/FetchShortUrlsAll.controllers";
import UpdateShortUrlsById from "../controllers/Admin/UpdateShortUrlById.controller";

const AdminRoutes: Router = Router();
const AdminRoutesUnProtective: Router = Router();

AdminRoutes.get("/all", FetchShortUrlsAll);
AdminRoutesUnProtective.post("/login", AdminLogin);

AdminRoutes.get("/url/:id", FetchShortUrlsById);

AdminRoutes.delete("/delete/:id", DeleteShortUrlById);

AdminRoutes.put("/update/:id", UpdateShortUrlsById);

export { AdminRoutesUnProtective };
