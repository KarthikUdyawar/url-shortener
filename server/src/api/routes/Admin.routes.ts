import { Router } from "express";
import AdminLogin from "../controllers/Admin/login.controller";
import AdminLogout from "../controllers/Admin/logout.controller";
import DeleteShortUrlById from "../controllers/Admin/DeleteShortUrlById.controller";
import FetchShortUrlsById from "../controllers/Admin/FetchShortUrlById.controller";
import FetchShortUrlsAll from "../controllers/Admin/FetchShortUrlsAll.controllers";
import UpdateShortUrlsById from "../controllers/Admin/UpdateShortUrlById.controller";

const AdminRoutesProtective: Router = Router();
const AdminRoutesUnProtective: Router = Router();

AdminRoutesUnProtective.post("/login", AdminLogin);

AdminRoutesProtective.put("/logout", AdminLogout);

AdminRoutesProtective.get("/all", FetchShortUrlsAll);

AdminRoutesProtective.get("/url/:id", FetchShortUrlsById);

AdminRoutesProtective.delete("/delete/:id", DeleteShortUrlById);

AdminRoutesProtective.put("/update/:id", UpdateShortUrlsById);

export { AdminRoutesProtective, AdminRoutesUnProtective };
