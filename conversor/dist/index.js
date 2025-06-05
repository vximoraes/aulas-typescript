"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Currency_1 = require("./types/Currency");
const convertCurrency_1 = require("./models/convertCurrency");
(0, convertCurrency_1.convertCurrency)(100, Currency_1.Currency.USD, Currency_1.Currency.BRL);
