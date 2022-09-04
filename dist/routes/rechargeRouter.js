"use strict";
exports.__esModule = true;
var express_1 = require("express");
var rechargeController_1 = require("../controllers/rechargeController");
var cardIdVerify_1 = require("../middlewares/cardIdVerify");
var rechargeRouter = (0, express_1.Router)();
rechargeRouter.post('/card/:id/recharge', cardIdVerify_1.cardIdVerify, rechargeController_1.rechargeCard);
exports["default"] = rechargeRouter;
