/* -------------------- Funções relacionadas à Login de usuário -------------------- */

// Variáveis relacionadas ao login
var body = document.querySelector("body");
var usu = document.getElementById("login");
var nomeUsu = document.getElementById("span-login");
var imgLogin = document.getElementById("img-login");
url = location.href;

// Verificação - Caso o storage do navegador esteja vazio, é possível fazer login.
body.onload = function() {
    if (typeof sessionStorage.nome != "undefined") {
        usu.innerHTML = `Bem vindo(a) - <i class="fas fa-ghost"></i> <strong style="color: var(--ciano)">${sessionStorage.nome}</strong>`;
        nomeUsu.innerHTML = "<i class='fas fa-times-circle'></i>";

        // Limpa o login e redireciona para a tela principal, caso o usuário clique novamente.
        imgLogin.addEventListener("click", function() {
            sessionStorage.clear();
            window.location.href = url;
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
        window.location.href = url;
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
    var cesta = document.getElementById("cesta");
    var id = parseInt(document.getElementById(idBotao).value) + 1;

    // Adiciona em uma lista a estrutura HTML do item selecionado.
    itensSalvos.push({
        id: id,
        dados: itemHTML
    })

    let index = itensSalvos.findIndex(i => i.id == id);
    alert(`${itensSalvos[index].dados.children[1].textContent} - Salvo com sucesso!`)
    salvos.innerText = itensSalvos.length;
    cesta.innerText = itensSalvos.length;
}

/* Função para mostrar os itens salvos pelo usuário */
function mostrarSalvos() {
    var lista = document.getElementById("item");
    var titulo = document.querySelector(".titulo-wrapper");
    lista.innerHTML = "";

    // Validação - Verifica se o usuário salvou algum item.
    if (typeof itensSalvos === "undefined") {
        alert("Você não possui itens salvos.");
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
            var clone = itensSalvos[x].dados.cloneNode(true);
            var botoes = clone.children[4].children[0];

            // Remove o botão de salvar e altera o comprimento do botão de comprar.
            botoes.children[0].style.width = "100%";
            botoes.children[1].style.display = "none";
            lista.appendChild(clone)
            window.location.href = "#item"
        }
    }

}


/* -------------------- Funções relacionadas à Cesta de compras -------------------- */

// Função para montar e mostrar os itens salvos em uma tabela, ao clicar no ícone da cesta.
function cesta() {

    cestaCompras = document.getElementById("corpo-tabela");
    var total = 0;

    if (typeof itensSalvos != "undefined") {

        // Limpa a tabela antes de adicionar os itens
        document.getElementById("cesta-vazia").style.display = "none";
        document.getElementById("corpo-tabela").innerHTML = "";

        // Mostra novamente a tabela caso seja necessário
        document.getElementById("titulo-tabela").style.display = "table-row";

        for (var x = 0; x < itensSalvos.length; x++) {
            var id = itensSalvos[x].id;
            var nomeItem = itensSalvos[x].dados.children[1].textContent;
            document.getElementById("corpo-tabela").display = "block";

            // Formatação do valor dos itens adicionados na cesta de compras.
            var preco = itensSalvos[x].dados.children[3].textContent;
            var precoFormatado = preco.split(" ");
            precoFormatado = precoFormatado[1].replaceAll(".", "");
            var precoReal = precoFormatado.replaceAll(",", ".")
            preco = parseFloat(precoReal);
            var total = total + preco;

            // Cria o elemento "tr" (linha), adiciona um ID e incrementa esse elemento na tabela.
            var linha = document.createElement("tr");
            linha.setAttribute("id", "tr" + x)
            cestaCompras.appendChild(linha);

            // Cria elemento "td", adiciona o ID no elemento e adiciona na 1° célula. 
            var celula = document.createElement("td");
            celula.innerHTML = id;
            document.getElementById("tr" + x).appendChild(celula);

            // Cria elemento "td", adiciona o Nome do item no elemento e adiciona na 2° célula.
            celula = document.createElement("td");
            celula.innerHTML = nomeItem;
            document.getElementById("tr" + x).appendChild(celula);

            // Cria elemento "td", adiciona o Preço do item no elemento e adiciona na 3° célula.
            celula = document.createElement("td");
            celula.innerHTML = preco.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
            document.getElementById("tr" + x).appendChild(celula);

        }

        var totalPreco = document.getElementById("total");
        totalPreco.innerHTML = `Total do pedido: <strong>${total.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</strong>`
        document.getElementById("qtdItens").innerHTML = `(${itensSalvos.length}x)`

    } else {
        // Esconde a tabela caso não tenha nenhum item adicionado a cesta.
        document.getElementById("titulo-tabela").style.display = "none";
    }

}