"use strict";
exports.__esModule = true;
var cors_1 = require("cors");
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var app = (0, express_1["default"])();
dotenv_1["default"].config();
app.use((0, cors_1["default"])());
app.use((0, express_1.json)());
var PORT = process.env.PORT || 4000;
app.listen(process.env.PORT, function () {
    console.log("Server running on port " + process.env.PORT);
});
