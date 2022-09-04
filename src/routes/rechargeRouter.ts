import { Router } from "express";
import { rechargeCard } from "../controllers/rechargeController";
import { cardIdVerify } from "../middlewares/cardIdVerify";

const rechargeRouter = Router();

rechargeRouter.post('/card/:id/recharge',cardIdVerify, rechargeCard);

export default rechargeRouter;