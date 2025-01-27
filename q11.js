const filmes = ["Amor e Monstros", "Bagagem de Risco", "Rebel Ridge", "Jumanji", "Agente Faixa-Preta"];

const criticasEngracadas = [
    "Um filme que prova que o amor pode sobreviver... até a monstros gigantes!",
    "Você nunca mais vai querer despachar sua mala no aeroporto depois desse filme.",
    "Ação intensa e reviravoltas inesperadas. Ou talvez só um pedido de pizza errada!",
    "Quando um jogo te coloca dentro da aventura, mas você ainda não terminou suas séries na Netflix.",
    "Cuidado! Esse agente pode ser mais perigoso que um Wi-Fi sem senha!"
];

console.log("Críticas engraçadas dos filmes:");

filmes.forEach((filme, index) => {
    console.log(`${index + 1}. ${filme} - ${criticasEngracadas[index]}`);
});
