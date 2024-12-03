"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertCurrency = convertCurrency;
const exchangeRates_1 = require("../models/exchangeRates");
// Converte um valor entre duas moedas usando taxas de câmbio.
function convertCurrency(amount, from, to) {
    // Calcula o valor inicial em BRL com base na moeda de origem
    const amountInBRL = amount * exchangeRates_1.exchangeRates[from];
    // Converte o valor em BRL para a moeda de destino
    const convertedAmount = amountInBRL / exchangeRates_1.exchangeRates[to];
    // Exibe o resultado no console
    console.log(`${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`);
    // Retorna o valor convertido
    return convertedAmount;
}
