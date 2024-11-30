enum Currency {
    USD = 'USD',
    EUR = 'EUR',
    BRL = 'BRL'
}

const exchangeRates = {
    USD: 5.25,
    EUR: 5.9,
    BRL: 1
}

function convertCurrency(amount: number, from: Currency, to: Currency): number {
    const amountInicial = amount * exchangeRates[from]

    const amountConvertido = amountInicial / exchangeRates[to]

    console.log(`${amount} ${from} = ${amountConvertido.toFixed(2)} ${to}`);
    
    return amountConvertido
}

convertCurrency(100, Currency.USD, Currency.BRL)

