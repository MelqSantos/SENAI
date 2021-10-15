/* Mostra o nome do usuário caso a storage no navegador tenha conteúdo.*/
var body = document.querySelector("body");
var usu = document.getElementById("login");

body.onload = function() {
    if (typeof sessionStorage.nome != "undefined") {
        usu.innerHTML = "Bem vindo(a) " + "<strong>" + sessionStorage.nome + "</strong>";
    }
}


/* Função para validar o login na página principal */
function validaLogin() {
    const usuarios = [
        { nome: "Daniel", senha: "123456" },
        { nome: "Melqui", senha: "123456" },
        { nome: "Julia", senha: "123456" },
        { nome: "Marcos", senha: "123456" }
    ];

    var alerta = document.getElementById("alerta");
    var nome = document.getElementById("name").value;
    var senha = document.getElementById("senha").value;
    var entrar = document.getElementById("entrar");
    var encontrado = 0;

    // Percorre a lista de usuário e verifica se o usuário/senha digitados existem.
    for (var x = 0; x < usuarios.length; x++) {
        if (nome == usuarios[x].nome && senha == usuarios[x].senha) {
            encontrado = encontrado + 1;
        }
    }

    // Caso não encontra apresenta um erro para o usuário.
    if (encontrado == 0) {
        alerta.innerHTML = "<i class='fas fa-times-circle'></i> Usuário ou senha incorretos."
    } else {
        // Armazena o nome do usuário na storage do navegador.
        sessao = sessionStorage;
        sessao.setItem("nome", nome);
        window.location.href = "index.html";

    }
}

/* Função para contagem de itens salvos 
Pega o ID do botão clicado e formata o nome que será igual do ID do produto. */
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