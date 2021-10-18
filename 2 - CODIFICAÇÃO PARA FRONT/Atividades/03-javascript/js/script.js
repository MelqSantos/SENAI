/* -------------------- Funções relacionadas à Login de usuário -------------------- */

// Variáveis relacionadas ao login
var body = document.querySelector("body");
var usu = document.getElementById("login");
var nomeUsu = document.getElementById("span-login");
var imgLogin = document.getElementById("img-login");

// Verificação - Caso o storage do navegador esteja vazio, é possível fazer login.
body.onload = function() {
    if (typeof sessionStorage.nome != "undefined") {
        usu.innerHTML = `Bem vindo(a) - <i class="fas fa-ghost"></i> <strong style="color: var(--ciano)">${sessionStorage.nome}</strong>`;
        nomeUsu.innerHTML = "<i class='fas fa-times-circle'></i>"

        // Limpa o login e redireciona para a tela principal, caso o usuário clique novamente.
        imgLogin.addEventListener("click", function() {
            sessionStorage.clear();
            window.location.href = "index.html";
        })

    }

}

/* Função fazer login e redirecionar para a tela principal */
function login() {
    var nome = document.getElementById("name").value;
    var alerta = document.getElementById("alerta");

    // Armazena o nome do usuário na storage do navegador.
    sessao = sessionStorage;

    if (nome == "" || typeof nome == "undefined") {
        alerta.innerHTML = "<i class='fas fa-times-circle'></i> Preencha o campo acima."
    } else {
        sessao.setItem("nome", nome);
        window.location.href = "index.html";
    }
}

/* -------------------- Funções relacionadas à Itens salvos -------------------- */

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

    // Adiciona em uma lista a estrutura HTML do item selecionado.
    itensSalvos.push({
        itemHTML
    })

    salvos.innerText = itensSalvos.length;

}