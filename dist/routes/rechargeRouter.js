"use strict";
exports.__esModule = true;
var express_1 = require("express");
var rechargeController_1 = require("../controllers/rechargeController");
var cardIdVerify_1 = require("../middlewares/cardIdVerify");
var apiKeyValidator_1 = require("../middlewares/apiKeyValidator");
var rechargeRouter = (0, express_1.Router)();
rechargeRouter.post('/card/:id/recharge', apiKeyValidator_1.apiKeyVerify, cardIdVerify_1.cardIdVerify, rechargeController_1.rechargeCard);
exports["default"] = rechargeRouter;
