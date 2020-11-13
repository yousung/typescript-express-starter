import { Router, Request, Response } from "express";
import homeContoller from "../../controller/home.contoller";

const router: Router = Router();

router.get("/", homeContoller.index);

router.get("/:id", homeContoller.show);

router.get("/:id/edit", homeContoller.edit);

export default router;
