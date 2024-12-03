import { Currency } from "../types/Currency";
import { exchangeRates } from "../models/exchangeRates";

// Converte um valor entre duas moedas usando taxas de câmbio.
export function convertCurrency(amount: number, from: Currency, to: Currency): number {
    // Calcula o valor inicial em BRL com base na moeda de origem
    const amountInBRL = amount * exchangeRates[from]

    // Converte o valor em BRL para a moeda de destino
    const convertedAmount = amountInBRL / exchangeRates[to]

    // Exibe o resultado no console
    console.log(`${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`)
    
    // Retorna o valor convertido
    return convertedAmount
}