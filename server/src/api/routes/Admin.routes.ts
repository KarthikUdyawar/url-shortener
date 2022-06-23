import { Router } from "express";
import FetchShortUrlsAll from "../controllers/FetchShortUrlsAll.controllers";

const AdminRoutes: Router = Router();

AdminRoutes.get("/all", FetchShortUrlsAll);

export default AdminRoutes;
