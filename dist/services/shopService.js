"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.purchasePOS = void 0;
var cardRepository_1 = require("../repositories/cardRepository");
var businessRepository_1 = require("../repositories/businessRepository");
var validCardService_1 = require("./validCardService");
var paymentRepository_1 = require("../repositories/paymentRepository");
var balanceService_1 = require("./balanceService");
function purchasePOS(cardId, password, shopId, amount) {
    return __awaiter(this, void 0, void 0, function () {
        var valid, active, cardData, businessData, balance, paymentData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, validCardService_1.isValid)(cardId)];
                case 1:
                    valid = _a.sent();
                    if (!valid) {
                        throw { code: 'Not Valid', message: 'Card not valid' };
                    }
                    return [4 /*yield*/, (0, validCardService_1.isActive)(cardId)];
                case 2:
                    active = _a.sent();
                    if (!active) {
                        throw { code: 'Not Valid', message: 'Card not active' };
                    }
                    return [4 /*yield*/, (0, cardRepository_1.findById)(cardId)];
                case 3:
                    cardData = _a.sent();
                    return [4 /*yield*/, (0, businessRepository_1.findBusinessById)(shopId)];
                case 4:
                    businessData = _a.sent();
                    if (password !== cardData.password) {
                        throw { code: 'Unauthorized', message: 'Password not valid' };
                    }
                    if (cardData.type !== businessData.type) {
                        throw { code: 'Unauthorized', message: 'Card type does not correspond to business type' };
                    }
                    return [4 /*yield*/, (0, balanceService_1.balanceCalculus)(cardId)];
                case 5:
                    balance = (_a.sent()).balance;
                    if (amount > balance) {
                        throw { code: 'Unauthorized', message: 'Balance insuficient' };
                    }
                    paymentData = { cardId: cardId, businessId: shopId, amount: amount };
                    return [4 /*yield*/, (0, paymentRepository_1.insert)(paymentData)];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.purchasePOS = purchasePOS;
