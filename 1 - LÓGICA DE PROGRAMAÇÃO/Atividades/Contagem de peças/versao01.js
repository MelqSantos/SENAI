/* ------------------- Sistema de contagem de peças ------------------- */

// Objeto com as descrições e pesos das peças.
const listaDePecas = [
    { desc: "HD", peso: 700 },
    { desc: "Circuito", peso: 50 },
    { desc: "Fonte", peso: 400 },
    { desc: "Memória RAM", peso: 60 },
    { desc: "Bateria", peso: 400 },
    { desc: "Processador", peso: 100 }
]

// Quantidade de itens incorretos no cadastro
let incorretos = 0;

// Quantidade de itens na lista de peças.
const qtdItens = listaDePecas.length;

// Validação do limite de 10 peças na lista
if (qtdItens > 10) {
    console.log(`As ${qtdItens} peças não poderão ser cadastradas, a quantidade máxima da lista é de 10 itens!`);
} else {

    // Laço de repetição que percorre o array e verifica os critérios de cadastro.
    for (let x = 0; x < qtdItens; x++) {
        // Pega informações de descrição e peso em cada item na lista.
        let pecaAtual = listaDePecas[x].desc;
        let pesoAtual = listaDePecas[x].peso;

        // Validação de caracteres
        if (pecaAtual.length < 3) {
            console.log(`A peça n°${x + 1} "${pecaAtual}" não pode ser cadastrada, possui menos de 3 caracteres!`);
            incorretos = incorretos + 1;
        } else
        // Validação de peso
        if (pesoAtual < 100) {
            console.log(`A peça n°${x + 1} "${pecaAtual}" com peso de ${pesoAtual}g não pode ser cadastrada, possui peso insuficiente!`);
            incorretos = incorretos + 1;
        }

    }
}

// Relatório de cadastro 
console.log(`
+ ----------- Relatório ---------- +
Itens com cadastro correto: ${qtdItens - incorretos}
Itens com cadastro incorreto: ${incorretos}
Total de itens: ${qtdItens} 
`)