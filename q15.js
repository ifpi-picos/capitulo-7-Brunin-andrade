const filmes = ["Amor e Monstros", "Bagagem de Risco", "Rebel Ridge", "Jumanji", "Agente Faixa-Preta"];

function buscarFilme(titulo) {

    const filmeEncontrado = filmes.find(filme => filme.toLowerCase() === titulo.toLowerCase());

    if (filmeEncontrado) {
        console.log(`O filme "${filmeEncontrado}" está na lista! `);
    } else {
        console.log(`O filme "${titulo}" não foi encontrado na lista.`);
    }
}

buscarFilme("jumanji");  
buscarFilme("TITANIC");  
buscarFilme("bagagem de risco"); 
