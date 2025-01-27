function exibirPrimeiroNome(nomeCompleto) {
    let nomeArray = nomeCompleto.trim().split(" ");
    let primeiroNome = nomeArray[0]; 
    console.log(primeiroNome);
}

const primeironome = prompt  ("Digite seu nome completo:")
exibirPrimeiroNome(primeironome)