"use strict";
exports.__esModule = true;
var express_1 = require("express");
var shopController_1 = require("../controllers/shopController");
var shopRouter = (0, express_1.Router)();
shopRouter.post('/purchase', shopController_1.purchase);
exports["default"] = shopRouter;
