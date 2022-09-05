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
exports.cardData = void 0;
var employeeRepository_1 = require("../repositories/employeeRepository");
var cardRepository_1 = require("../repositories/cardRepository");
var faker_1 = require("@faker-js/faker");
function cardData(employeeId, cardType) {
    return __awaiter(this, void 0, void 0, function () {
        var employee, cardTest, cardNumber, cvc, date, name, newCardData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, employeeRepository_1.findById)(employeeId)];
                case 1:
                    employee = _a.sent();
                    if (!employee) {
                        throw { code: "Unauthorized", message: "Employee not registered" };
                    }
                    return [4 /*yield*/, (0, cardRepository_1.findByTypeAndEmployeeId)(cardType, employeeId)];
                case 2:
                    cardTest = _a.sent();
                    if (cardTest) {
                        throw { code: "Unauthorized", message: "Card already registered for employee" };
                    }
                    cardNumber = faker_1.faker.finance.account();
                    cvc = faker_1.faker.finance.creditCardCVV();
                    date = expirationDate();
                    name = employeeName(employee.fullName);
                    newCardData = {
                        employeeId: employeeId,
                        number: cardNumber,
                        cardholderName: name,
                        securityCode: cvc,
                        expirationDate: date,
                        password: "",
                        isVirtual: false,
                        originalCardId: null,
                        isBlocked: true,
                        type: cardType
                    };
                    return [4 /*yield*/, (0, cardRepository_1.insert)(newCardData)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.cardData = cardData;
function expirationDate() {
    var date = new Date();
    var month = date.getMonth();
    var year = String(date.getFullYear());
    year = year[2] + year[3];
    var expirationYear = Number(year) + 5;
    var returnDate = month + "/" + expirationYear;
    return returnDate;
}
function employeeName(employeeName) {
    var nameArray = employeeName.split(" ");
    var middlenames = "";
    for (var i = 1; i < nameArray.length - 1; i++) {
        var midName = nameArray[i];
        if (midName.length > 2) {
            middlenames += midName[0] + " ";
        }
    }
    var returnName = nameArray[0].toUpperCase() + " " + middlenames + nameArray[nameArray.length - 1].toUpperCase();
    return returnName;
}
