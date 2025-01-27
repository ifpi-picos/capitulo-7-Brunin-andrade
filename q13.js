const filmes = ["Amor e Monstros", "Bagagem de Risco", "Rebel Ridge", "Jumanji", "Agente Faixa-Preta"];

const filmesRecomendados = filmes.filter(filme => filme === "Jumanji" || filme === "Amor e Monstros");

console.log("Filmes recomendados:");
console.log(filmesRecomendados);
