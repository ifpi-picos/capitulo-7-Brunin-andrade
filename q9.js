const filmes = ["Amor e Monstros", "Bagagem de Risco", "Rebel Ridge", "Jumanji", "Agente Faixa-Preta"];

console.log("Os filmes informados foram:");
filmes.forEach((filme, index) => {
    console.log(`${index + 1}. ${filme}`);
});
