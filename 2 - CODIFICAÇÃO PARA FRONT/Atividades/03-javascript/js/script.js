// Pega o ID do botão clicado e formata o nome que será igual do ID do produto. 
function salvarItem(idBotao) {

    if (typeof itensSalvos === "undefined") {
        // Variável global.
        itensSalvos = [];
    }

    let idIitem = idBotao.replace("btn", "item");
    let itemHTML = document.getElementById(idIitem);
    let salvos = document.getElementById("salvos")

    // Adiciona em uma lista a estrutua HTML do item selecionado.
    itensSalvos.push({
        itemHTML
    })

    salvos.innerText = itensSalvos.length;
}