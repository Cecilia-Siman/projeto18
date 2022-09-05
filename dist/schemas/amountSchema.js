"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var joi_1 = __importDefault(require("joi"));
var amountSchema = joi_1["default"].object({
    amount: joi_1["default"].number().greater(0).required()
});
exports["default"] = amountSchema;
