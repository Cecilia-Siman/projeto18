import { Router } from "express";
import { rechargeCard } from "../controllers/rechargeController";
import { cardIdVerify } from "../middlewares/cardIdVerify";
import { apiKeyVerify } from "../middlewares/apiKeyValidator";

const rechargeRouter = Router();

rechargeRouter.post('/card/:id/recharge', apiKeyVerify,cardIdVerify, rechargeCard);

export default rechargeRouter;