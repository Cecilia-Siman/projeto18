"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var joi_1 = __importDefault(require("joi"));
var createSchema = joi_1["default"].object({
    employeeId: joi_1["default"].number().required(),
    cardType: joi_1["default"].string().valid('groceries', 'restaurants', 'transport', 'education', 'health').required()
});
exports["default"] = createSchema;
