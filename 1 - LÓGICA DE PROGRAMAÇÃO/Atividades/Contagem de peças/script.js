var listaDePecas = [];
// Pergunta inicial
var quantidadeLista = window.prompt(`+ ---------- Parâmetros para cadastro ---------- +
- Limite de 10 itens na lista
- Peças com peso superior a 100g
- Peças com mais de 3 caracteres no nome

Quantas peças deseja cadastrar?
`);

if (quantidadeLista > 10) {
    alert("[ERRO] Só é possível cadastrar no máximo 10 itens!")
} else {
    for (var x = 0; x < quantidadeLista; x++) {

        var peca = window.prompt(`Digite o nome da peça n°${x + 1} :`);

        if (peca.length < 3) {
            window.confirm(`* ------- Peça deverá possuir mais de 3 caracteres! ------- *
                    [ATENÇÃO] 1 tentativa restante!`)

            peca = window.prompt("Digite novamente o nome da peça:");

        }

        if (peca.length < 3) {
            alert("[ATENÇÃO] Cadastro encerrado por esgotamento de tentativas!")
        } else

            var peso = Number(window.prompt(`Digite o peso da peça "${peca}" em gramas:`));

        if (peso < 100) {
            window.confirm(`* ------- Peça deverá possuir peso superior a 100g! ------- *
                    [ATENÇÃO] 1 tentativa restante!`)

            peso = Number(window.prompt(`Digite novamente o peso da peça "${peca}" em gramas:`));

        }
        if (peso < 100) {
            alert("[ATENÇÃO] Cadastro encerrado por esgotamento de tentativas!")
        } else {

            listaDePecas.push({
                desc: peca,
                peso: peso
            });

        }
    }

    if (listaDePecas.length != 0)
        alert("[Parabéns] Peças cadastradas com sucesso!")
}

// Mostar peças

for (var i = 0; i < quantidadeLista; i++) {
    document.write(`
    Peça: ${listaDePecas[i].desc} | Peso: ${listaDePecas[i].peso}g <br>`)

}