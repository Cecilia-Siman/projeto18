import { Router } from "express";

import { rechargeCard } from "../controllers/rechargeController";

const rechargeRouter = Router();

rechargeRouter.post('/card/:id/recharge', rechargeCard);