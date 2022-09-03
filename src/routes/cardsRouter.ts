import { Router } from "express";
import { createCard } from "../controllers/createCardController";
import { activateCard, blockCard, unlockCard } from "../controllers/cardStatusController";

const cardRouter = Router();

cardRouter.post('/card/create', createCard);
cardRouter.post('/card/:id/activate', activateCard);
cardRouter.put('/card/:id/block', blockCard);
cardRouter.put('/card/:id/unlock', unlockCard);


export default cardRouter;