/* ------------------ Sistema para cadastro de eventos (Lógica 2)------------------ */

// Pega a data atual referente ao horário de Brasília.
let agora = new Date();
let agora_Formatado = agora.getDate() + "/" + (agora.getMonth() + 1) + "/" + agora.getUTCFullYear();

// Objeto com as características do evento.
let evento = {
    descricao: "Introdução à inteligência artificial",
    hoje: agora_Formatado,
    data: "15/9/2021",
    idade_org: 32,
    palestrantes: 3,
    convidados: 87,
}

let total = evento.palestrantes + evento.convidados;

// Descrição do evento
console.log(`
Evento: ${evento.descricao} 
Data atual: ${evento.hoje}
Data do evento: ${evento.data}
idade do organizador: ${evento.idade_org + " anos"}
Participantes: ${evento.palestrantes} palestrantes e ${evento.convidados} convidados (Total: ${total})
`);

/*------ Validações ------*/

//Validação das datas
if (toString(evento.data) < toString(agora_Formatado)) {
    console.log("*--- Evento não poderá ser cadastrado ---*");
    console.log("Motivo: A data do evento não pode ser menor que a data atual.");
} else
// validação de idade
if (evento.idade < 18) {
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
