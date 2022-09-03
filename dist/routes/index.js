"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var cardsRouter_1 = __importDefault(require("./cardsRouter"));
var rechargeRouter_1 = __importDefault(require("./rechargeRouter"));
var shopRouter_1 = __importDefault(require("./shopRouter"));
var router = (0, express_1.Router)();
router.use(cardsRouter_1["default"]);
router.use(rechargeRouter_1["default"]);
router.use(shopRouter_1["default"]);
exports["default"] = router;
