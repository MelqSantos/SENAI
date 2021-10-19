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

    var idIitem = idBotao.replace("btn", "item");
    var itemHTML = document.getElementById(idIitem);
    var salvos = document.getElementById("salvos");

    // Adiciona em uma lista a estrutura HTML do item selecionado.
    itensSalvos.push({
        itemHTML
    })

    var id = document.getElementById(idBotao).value;
    alert(`${itensSalvos[id].itemHTML.children[1].textContent} - Salvo com sucesso!`)
    salvos.innerText = itensSalvos.length;
}

/* Função para mostrar os itens salvos pelo usuário */
function mostrarSalvos() {
    var lista = document.getElementById("item");
    var titulo = document.querySelector(".titulo-wrapper");
    lista.innerHTML = "";

    // Validação - Verifica se o usuário salvou algum item.
    if (typeof itensSalvos === "undefined") {
        alert("Você não possui itens salvos.")
    } else {
        document.getElementById("img-salvos").addEventListener("click", function() {
            location.href = "#item";
        })

        // Duplica o título padrão usado na página e altera alguns elementos
        var conteudoTit = titulo.cloneNode(true);
        conteudoTit.children[0].children[2].innerText = "Itens Salvos";
        lista.appendChild(conteudoTit);

        // Clona o HTML dos itens Salvos e mostra na tela
        for (var x = 0; x < itensSalvos.length; x++) {
            // Clona o elemento HTML
            var clone = itensSalvos[x].itemHTML.cloneNode(true);
            var botoes = clone.children[4].children[0];

            // Remove o botão de salvar e altera o comprimento do botão de comprar.
            botoes.children[0].style.width = "100%";
            botoes.children[1].style.display = "none";
            lista.appendChild(clone)
            window.location.href = "#item"
        }
    }

}