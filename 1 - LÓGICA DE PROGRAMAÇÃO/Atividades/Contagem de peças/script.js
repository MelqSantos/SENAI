let listaDePecas = [];
let tentativas = window.prompt("Quantas peças deseja cadastrar?");
let peca_tabela = document.getElementById("desc");
let peso_tabela = document.getElementById("peso");

if (tentativas > 10) {
    alert("[ERRO] Só é possível cadastrar no máximo 10 itens!")
} else {

    for (let x = 0; x < tentativas; x++) {

        let peca = window.prompt("Digite uma peça:");
        let peso = window.prompt("Digite o peso da peça anterior:");

        listaDePecas.push({
            desc: peca,
            peso: peso
        });

    }
}
// Mostrar peças inseridas

for (let i = 0; i < tentativas; i++) {

    document.write(`
    Peça: ${listaDePecas[i].desc} | Peso: ${listaDePecas[i].peso}g <br>`)

}