/* ------------------------- Sistema de cadastro de peças ------------------------- */

var listaDePecas = [];
var pesoTotal = 0;

// Pergunta inicial, para definir a quantidade de itens na lista de peças.
var quantidadeLista = window.prompt(`+ ---------- Parâmetros para cadastro ---------- +
- Limite de 10 itens na lista
- Peças com peso superior a 100g
- Peças com mais de 3 caracteres no nome

Quantas peças deseja cadastrar?
`);

// Validação inicial para não ultrapassar o limite de 10 peças.
if (quantidadeLista > 10) {
    alert("[ERRO] Só é possível cadastrar no máximo 10 itens!");
} else {

    // Laço de repetição para as perguntas.
    for (var x = 0; x < quantidadeLista; x++) {

        var peca = window.prompt(`Digite o nome da peça n°${x + 1} :`);
        // Validação de quantidade de caracteres.
        if (peca.length < 3) {
            window.confirm(`* ------- Peça deverá possuir mais de 3 caracteres! ------- *
                    [ATENÇÃO] 1 tentativa restante!`)

            peca = window.prompt("Digite novamente o nome da peça:");
        }
        // 2° Validação caso o usuário digite novamente a mesma coisa.
        if (peca.length < 3) {
            alert("[ATENÇÃO] Cadastro encerrado por esgotamento de tentativas!");
            break;

        } else

            var peso = Number(window.prompt(`Digite o peso da peça "${peca}" em gramas:`));
        // Validação de peso da peça
        if (peso < 100) {
            window.confirm(`* ------- Peça deverá possuir peso superior a 100g! ------- *
                    [ATENÇÃO] 1 tentativa restante!`);

            peso = Number(window.prompt(`Digite novamente o peso da peça "${peca}" em gramas:`));
        }
        // 2° Validação caso o usuário digite novamente a mesma coisa.
        if (peso < 100) {
            alert("[ATENÇÃO] Cadastro encerrado por esgotamento de tentativas!");
            break;

        } else {

            // Cria um objeto dentro da lista com as características da peça atual. 
            listaDePecas.push({
                desc: peca,
                peso: peso
            });
        }
    }
}

/* ------- Cria uma tabela para mostrar os itens cadastrados ------- */

var tabela = document.getElementById("table");

for (var x = 0; x < quantidadeLista; x++) {
    // Cria o elemento "tr" (linha), adiciona um ID e incrementa esse elemento na tabela.
    var linha = document.createElement("tr");
    linha.setAttribute("id", "tr" + x)
    tabela.appendChild(linha);

    // Cria elemento "td", adiciona o nome da peça no elemento e adiciona na 1° célula. 
    var conteudo = document.createElement("td");
    conteudo.innerHTML = listaDePecas[x].desc;
    document.getElementById("tr" + x).appendChild(conteudo);

    // Cria elemento "td", adiciona o peso da peça no elemento e adiciona na 2° célula.
    conteudo = document.createElement("td");
    conteudo.innerHTML = listaDePecas[x].peso + "g";
    document.getElementById("tr" + x).appendChild(conteudo);

    // Soma o peso total dos itens
    pesoTotal = pesoTotal + listaDePecas[x].peso;
}

document.getElementById("relatorio").innerHTML = `<strong>Total de itens: </strong>${listaDePecas.length} peças<br>
<strong>Peso total dos itens</strong>(g): ${pesoTotal}g<br>
<strong>Peso total dos itens</strong>(Kg): ${pesoTotal / 1000}Kg 
`;