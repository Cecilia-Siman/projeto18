import { Router } from "express";
import cardRouter from "./cardsRouter";
import rechargeRouter from "./rechargeRouter";
import shopRouter from "./shopRouter";

const router = Router();
router.use(cardRouter);
router.use(rechargeRouter);
router.use(shopRouter);

export default router;