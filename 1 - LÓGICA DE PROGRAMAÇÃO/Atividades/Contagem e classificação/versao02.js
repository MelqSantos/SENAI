const campeonato = [];
const campeonatoFinal = [];
const times = [
    { time: "Chelsea", vitorias: 15, empates: 5, derrotas: 5 },
    { time: "Arsenal", vitorias: 12, empates: 8, derrotas: 0 },
    { time: "Tottenham", vitorias: 8, empates: 10, derrotas: 2 },
    { time: "Manchester united", vitorias: 13, empates: 5, derrotas: 2 },
    { time: "Manchester city", vitorias: 10, empates: 9, derrotas: 1 },
    { time: "Leicester", vitorias: 5, empates: 10, derrotas: 5 }
]

function pontos(pos) {
    var vitorias = times[pos].vitorias * 3;
    var empate = times[pos].empates;
    var pontos = vitorias + empate;

    return pontos
}


for (var x = 0; x < times.length; x++) {

    campeonato.push({
        Pontos: pontos(x),
        Time: times[x].time,
        Vitorias: times[x].vitorias
    })
}

campeonato.sort(function(a, b) {
    if (a.Pontos < b.Pontos) {
        return 1;
    }
    if (a.Pontos > b.Pontos) {
        return -1;
    }
    if (a.Pontos === b.Pontos) {
        return 0;
    }
})

for (var x = 0; x < times.length; x++) {

    campeonatoFinal.push({
        Posição: x + 1,
        Pontos: campeonato[x].Pontos,
        Time: campeonato[x].Time,
        Vitórias: campeonato[x].Vitorias
    })
}

console.log(`
+ ---------------------- Classificação ---------------------- +
`)
console.table(campeonatoFinal)