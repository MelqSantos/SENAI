/* ------------------ Sistema para cadastro de eventos ------------------ */

// Variáveis voltadas ao evento em sí.
let nome_Evento = "Fundamentos da programação WEB";
let data_Atual = "05/08/2021";
let data_Evento = "05/08/2021";

// Variáveis voltadas aos participantes.
let idade = 21;
let palestrantes = 5;
let convidados = 90;
let total = palestrantes + convidados;

// Descrição do evento
console.log(`
Evento: ${nome_Evento}
Data atual: ${data_Atual}
Data do evento: ${data_Evento}
idade do organizador: ${idade + " anos"}
Participantes: ${palestrantes} palestrantes e ${convidados} convidados (Total: ${total})
`);

/*------ Validações ------*/

//Validação das datas
if (data_Evento < data_Atual) {
    console.log("*--- Evento não poderá ser cadastrado ---*");
    console.log("Motivo: A data do evento não pode ser menor que a data atual.");
} else
// validação de idade
if (idade < 18) {
    console.log("*--- Evento não poderá ser cadastrado ---*");
    console.log("Motivo: Só é permitido o cadastro para usuários maiores de 18 anos.");
} else
// Validação do número de participantes
if (total > 100) {
    console.log("*--- Evento não poderá ser cadastrado ---*");
    console.log("Motivo: A lotação máxima permitida é de 100 participantes.");
} else {
    console.log("*--- Evento cadastrado com sucesso! ---*");
    console.log("Motivo: O evento cumpre todos os requisitos.");
}
/*------ Fim das validações ------*/