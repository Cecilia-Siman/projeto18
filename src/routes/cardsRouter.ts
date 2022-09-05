import { Router } from "express";
import { createCard } from "../controllers/createCardController";
import { activateCard, blockCard, unlockCard } from "../controllers/cardStatusController";
import { cardIdVerify } from "../middlewares/cardIdVerify";
import { apiKeyVerify } from "../middlewares/apiKeyValidator";
import { cardBalance } from "../controllers/balanceController";

const cardRouter = Router();

cardRouter.post('/card/create', apiKeyVerify,createCard);
cardRouter.post('/card/:id/activate', cardIdVerify, activateCard);
cardRouter.put('/card/:id/block', cardIdVerify, blockCard);
cardRouter.put('/card/:id/unlock', cardIdVerify, unlockCard);
cardRouter.get('/card/:id/balance', cardIdVerify, cardBalance)

export default cardRouter;