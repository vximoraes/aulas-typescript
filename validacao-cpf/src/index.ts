function validarCpf(cpf: string) {
    // Validando o primeiro digito verificador 

    let resultadoSoma1: number = 0
    let divisor1: number = 10
    let primeiroDigitoVerificador

    for (let i = 0; i < 9; i++) {
        resultadoSoma1 += parseInt(cpf[i]) * divisor1
        divisor1--
    }
    
    let resto1: number = resultadoSoma1 % 11
    if (resto1 >= 10) {
        primeiroDigitoVerificador = 0;
    } else {
        primeiroDigitoVerificador = 11 - resto1;
    }

    console.log(`Primeiro digito verificador: ${primeiroDigitoVerificador}`)

    // Validando o segundo digito verificador 
    
    let resultadoSoma2: number = 0
    let divisor2: number = 11
    let segundoDigitoVerificador

    for (let i = 0; i < 10; i++) {
        resultadoSoma2 += parseInt(cpf[i]) * divisor2
        divisor2--
    }

    let resto2: number = resultadoSoma2 % 11
    let resto3 = 11 - resto2
    
    if (resto3 >= 10) {
        segundoDigitoVerificador = 0;     
    } else {
        segundoDigitoVerificador = 11 - resto2;
    }

    console.log(`Segundo digito verificador: ${segundoDigitoVerificador}`)

    // Validando CPF

    parseInt(cpf[9]) == primeiroDigitoVerificador && parseInt(cpf[10]) == segundoDigitoVerificador ? 
    console.log('É um CPF válido!') : console.log('É um CPF inválido!')

    // Verificando estado de emissão

    let digitoDoEstado = parseInt(cpf[8])
    switch (digitoDoEstado) {
        case 0:
            console.log('Pode ter sido emitido no(s) seguintes estado(s): Rio Grande do Sul')
            break;
        case 1: 
            console.log('Pode ter sido emitido no(s) seguintes estado(s): Distrito Federal, Goiás, Mato Grosso do Sul e Tocantins')
            break
        case 2:
            console.log('Pode ter sido emitido no(s) seguintes estado(s): Pará, Amazonas, Acre, Amapá, Rondônia e Roraima')
            break
        case 3:
            console.log('Pode ter sido emitido no(s) seguintes estado(s): Ceará, Maranhão e Piauí')
            break
        case 4:
            console.log('Pode ter sido emitido no(s) seguintes estado(s): Pernambuco, Rio Grande do Norte, Paraíba e Alagoas')
            break
        case 5:
            console.log('Pode ter sido emitido no(s) seguintes estado(s): Bahia; e Sergipe')
            break
        case 6: 
            console.log('Pode ter sido emitido no(s) seguintes estado(s): Minas Gerais')
            break
        case 7: 
            console.log('Pode ter sido emitido no(s) seguintes estado(s): Rio de Janeiro e Espírito Santo')
            break;
        case 8:
            console.log('Pode ter sido emitido no(s) seguintes estado(s): São Paulo')
            break;
        case 9: 
            console.log('Pode ter sido emitido no(s) seguintes estado(s): Paraná e Santa Catarina')
            break;
    }

}

validarCpf("03149764262");
