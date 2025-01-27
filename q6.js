function exibirPrimeiroUltimoNome(nomeCompleto) {
    const nomes = nomeCompleto.trim().split(" "); 
    const primeiroNome = nomes[0]; 
    const ultimoNome = nomes[nomes.length - 1];

    console.log(`Primeiro nome: ${primeiroNome}`);
    console.log(`Último nome: ${ultimoNome}`);
}


const nomeUsuario = prompt("Digite seu nome completo:");
exibirPrimeiroUltimoNome(nomeUsuario);
