enum Currency {
    USD = 'Dólar Americano',
    EUR = 'Euro',
    BRL = 'Real Brasileiro'
}

const exchangeRates = {
    USD: 5.25,
    EUR: 5.9,
    BRL: 1
}

function convertCurrency(amount: number, from: Currency, to: Currency): number {
    let conversao = parseFloat(from) * parseFloat(to)
    let conversaoQuantidade = amount * conversao
    return conversaoQuantidade
}

