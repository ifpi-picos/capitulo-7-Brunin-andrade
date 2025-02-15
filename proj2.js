let listaFilmes = [];
let filmesAssistidos = [];

function mostrarMenu() {
    console.log("\n===== MENU =====");
    console.log("1 - Adicionar filme");
    console.log("2 - Ordenar lista");
    console.log("3 - Pesquisar filme");
    console.log("4 - Exibir listas");
    console.log("5 - Marcar filme como assistido");
    console.log("6 - Remover filme");
    console.log("7 - Encerrar programa");
}

async function prompt(mensagem) {
    process.stdout.write(mensagem);
    return new Promise(resolve => {
        process.stdin.once("data", data => resolve(data.toString().trim()));
    });
}

async function adicionarFilme() {
    let titulo = await prompt("Digite o título do filme: ");
    let ano = await prompt("Digite o ano de lançamento: ");
    
    listaFilmes.push({ titulo, ano });
    console.log(`Filme '${titulo} (${ano})' adicionado à lista.`);
}

async function ordenarLista() {
    let criterio = await prompt("Ordenar por (1) Título ou (2) Ano: ");
    
    if (criterio === "1") {
        listaFilmes.sort((a, b) => a.titulo.localeCompare(b.titulo));
    } else if (criterio === "2") {
        listaFilmes.sort((a, b) => a.ano - b.ano);
    } else {
        console.log("Opção inválida!");
        return;
    }
    
    console.log("Lista ordenada com sucesso.");
}

async function pesquisarFilme() {
    let titulo = await prompt("Digite o título do filme que deseja pesquisar: ");
    let encontrado = listaFilmes.some(filme => filme.titulo.toLowerCase() === titulo.toLowerCase());
    
    if (encontrado) {
        console.log(`O filme '${titulo}' está na lista de filmes para assistir.`);
    } else {
        console.log("O filme não está na lista.");
    }
}

function exibirListas() {
    console.log("\nLista de Filmes para Assistir:");
    if (listaFilmes.length === 0) {
        console.log("Nenhum filme na lista.");
    } else {
        listaFilmes.forEach((filme, index) => {
            console.log(`${index + 1}. ${filme.titulo} (${filme.ano})`);
        });
    }

    console.log("\nLista de Filmes Assistidos:");
    if (filmesAssistidos.length === 0) {
        console.log("Nenhum filme assistido.");
    } else {
        filmesAssistidos.forEach((filme, index) => {
            console.log(`${index + 1}. ${filme.titulo} (${filme.ano})`);
        });
    }
}

async function marcarComoAssistido() {
    let titulo = await prompt("Digite o título do filme que assistiu: ");
    let index = listaFilmes.findIndex(filme => filme.titulo.toLowerCase() === titulo.toLowerCase());

    if (index !== -1) {
        let filme = listaFilmes.splice(index, 1)[0];
        filmesAssistidos.push(filme);
        console.log(`Filme '${filme.titulo}' marcado como assistido.`);
    } else {
        console.log("Filme não encontrado na lista.");
    }
}

async function removerFilme() {
    let titulo = await prompt("Digite o título do filme que deseja remover: ");
    let index = listaFilmes.findIndex(filme => filme.titulo.toLowerCase() === titulo.toLowerCase());

    if (index !== -1) {
        let filme = listaFilmes.splice(index, 1)[0];
        console.log(`Filme '${filme.titulo}' removido da lista.`);
    } else {
        console.log("Filme não encontrado.");
    }
}

async function main() {
    while (true) {
        mostrarMenu();
        let escolha = await prompt("Escolha uma opção: ");

        switch (escolha) {
            case "1":
                await adicionarFilme();
                break;
            case "2":
                await ordenarLista();
                break;
            case "3":
                await pesquisarFilme();
                break;
            case "4":
                exibirListas();
                break;
            case "5":
                await marcarComoAssistido();
                break;
            case "6":
                await removerFilme();
                break;
            case "7":
                console.log("Programa encerrado. Até logo!");
                process.exit();
            default:
                console.log("Opção inválida! Tente novamente.");
        }
    }
}

main();
