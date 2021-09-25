/* 
+ -------- Sistema de contagem e classificação -------- +
*/

let turma = [
    { aluno: "José", media: 6.5 },
    { aluno: "Maria", media: 5.5 },
    { aluno: "Jefferson", media: 7.5 },
    { aluno: "Júlia", media: 8.5 },
    { aluno: "Roberto", media: 8.5 },
    { aluno: "Letícia", media: 9.5 },
    { aluno: "Priscila", media: 4.5 },
    { aluno: "Vitor", media: 8.7 },
    { aluno: "Raul", media: 7.2 },
    { aluno: "Melqui", media: 9.7 }
]

let aprovados = 0;

// Método para ordenar o array pela média! 
turma.sort(function(a, b) {
    // a é menor que b, se retornar -1, ordena em ordem decrescente!
    if (a.media < b.media) {
        return 1;
    }
    //  a é maior que b, se retornar -1, ordena em ordem crescente!
    if (a.media > b.media) {
        return -1;
    }
    // a é igual a b, não terá alteração
    return 0;
})

console.log(" ")
console.log("+ ----------- Relatório ----------- +")
console.log(`Maior média: ${turma[0].media} (${turma[0].aluno})
Menor média: ${turma[turma.length - 1].media} (${turma[turma.length - 1].aluno})
Total de alunos: ${turma.length}
Alunos aprovados: ${Aprovados()}
Alunos reprovados: ${turma.length - aprovados}
`)

console.log("+ ----------- TOP 3 ----------- +")

for (let x = 0; x < 3; x++) {
    console.log(`N°${x+1}: ${turma[x].aluno} | Média: ${turma[x].media} `)
}
console.log(" ")

// Função para identificar quais alunos tem média superior a 5
function Aprovados() {
    for (let x = 0; x < turma.length; x++) {

        if (turma[x].media >= 5) {
            aprovados = aprovados + 1
        }
    }
    return aprovados
}