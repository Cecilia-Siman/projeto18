import { Router } from "express";
import { createCard } from "../controllers/createCardController";

const cardRouter = Router();

cardRouter.post('/card/create',createCard);
//cardRouter.post('/card/:id/activate',  );
//cardRouter.put('/card/:id/block',  );
//cardRouter.put('/card/:id/unlock',  );


export default cardRouter;