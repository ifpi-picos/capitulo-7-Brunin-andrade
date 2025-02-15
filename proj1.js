let listaCompras = []; // Array para armazenar os itens

function mostrarMenu() {
    console.log("\n===== MENU =====");
    console.log("1 - Adicionar item");
    console.log("2 - Remover item");
    console.log("3 - Pesquisar item");
    console.log("4 - Ordenar lista");
    console.log("5 - Exibir lista");
    console.log("6 - Limpar lista");
    console.log("7 - Encerrar programa");
}

async function prompt(mensagem) {
    process.stdout.write(mensagem);
    return new Promise(resolve => {
        process.stdin.once("data", data => resolve(data.toString().trim()));
    });
}

async function adicionarItem() {
    let item = await prompt("Digite o nome do item: ");
    listaCompras.push(item);
    console.log(`'${item}' foi adicionado à lista.`);
}

async function removerItem() {
    let item = await prompt("Digite o nome do item a ser removido: ");
    let index = listaCompras.indexOf(item);
    
    if (index !== -1) {
        listaCompras.splice(index, 1);
        console.log(`'${item}' foi removido da lista.`);
    } else {
        console.log("Item não encontrado!");
    }
}

async function pesquisarItem() {
    let item = await prompt("Digite o nome do item que deseja pesquisar: ");
    if (listaCompras.includes(item)) {
        console.log(`'${item}' está na lista de compras.`);
    } else {
        console.log("O item não está na lista.");
    }
}

function ordenarLista() {
    listaCompras.sort();
    console.log("A lista foi ordenada em ordem alfabética.");
}

function exibirLista() {
    if (listaCompras.length === 0) {
        console.log("A lista está vazia.");
    } else {
        console.log("\nLista de Compras:");
        listaCompras.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
}

function limparLista() {
    listaCompras = [];
    console.log("A lista foi completamente apagada.");
}

async function main() {
    while (true) {
        mostrarMenu();
        let escolha = await prompt("Escolha uma opção: ");

        switch (escolha) {
            case "1":
                await adicionarItem();
                break;
            case "2":
                await removerItem();
                break;
            case "3":
                await pesquisarItem();
                break;
            case "4":
                ordenarLista();
                break;
            case "5":
                exibirLista();
                break;
            case "6":
                limparLista();
                break;
            case "7":
                console.log("Programa encerrado. Até logo!");
                process.exit(); // Encerra o programa
            default:
                console.log("Opção inválida! Tente novamente.");
        }
    }
}

main();
