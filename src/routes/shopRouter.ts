import { Router } from "express";
import { purchase } from "../controllers/shopController";

const shopRouter = Router();

shopRouter.post('/purchase', purchase);

export default shopRouter;