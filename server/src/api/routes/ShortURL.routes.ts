import { Router } from "express";

import TestApi from "../controllers/test.controller";

const router: Router = Router();

router.get("/test", TestApi);

export default router;
