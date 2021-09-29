const campeonato = [];
var times = [
    { time: "São Paulo", vitorias: 10, empates: 5, derrotas: 5 },
    { time: "Corinthians", vitorias: 12, empates: 8, derrotas: 0 },
    { time: "Santos", vitorias: 8, empates: 10, derrotas: 2 },
    { time: "Palmeiras", vitorias: 13, empates: 5, derrotas: 2 },
    { time: "Cuiabá", vitorias: 10, empates: 9, derrotas: 1 },
    { time: "RB Bragantino", vitorias: 5, empates: 10, derrotas: 5 },
    { time: "Chapecoense", vitorias: 3, empates: 7, derrotas: 10 },
    { time: "Atlético mineiro", vitorias: 17, empates: 1, derrotas: 2 },
    { time: "Flamengo", vitorias: 16, empates: 1, derrotas: 3 },
    { time: "Fortaleza", vitorias: 14, empates: 4, derrotas: 2 },
    { time: "Fluminense", vitorias: 10, empates: 5, derrotas: 5 },
    { time: "Internacional", vitorias: 9, empates: 4, derrotas: 4 }
]

// Soma os pontos de cada time e adiciona uma nova característica aos objetos (Pontos) 
for (var x = 0; x < times.length; x++) {

    var vitorias = times[x].vitorias;
    var empate = times[x].empates;
    var somaPontos = (vitorias * 3) + empate;
    var jogos = times[x].vitorias + times[x].empates + times[x].derrotas;

    times[x].Pontos = somaPontos;
    times[x].Jogos = jogos;
}

/* Método sort para ordenar */
times.sort(function(a, b) {
    if (a.Pontos > b.Pontos) {
        return -1
    }
    if (a.Pontos < b.Pontos) {
        return 1
    }
    // Se a for igual a b
    return 0
})


// Adiciona as informações em um novo array, acrescentando a posição no campeonato
for (var i = 0; i < times.length; i++) {
    campeonato.push({
        Posição: i + 1,
        Time: times[i].time,
        Jogos: times[i].Jogos,
        Pontos: times[i].Pontos,
        Vitórias: times[i].vitorias
    })
}

var qtdTimes = campeonato.length;

console.log(" ")
console.log(`+ ------------------------ Classificação ------------------------ +
G4 Libertadores: ${campeonato[0].Time}, ${campeonato[1].Time}, ${campeonato[2].Time}, ${campeonato[3].Time}
Z4 Rebaixamento: ${campeonato[qtdTimes -4].Time}, ${campeonato[qtdTimes -3].Time}, ${campeonato[qtdTimes -2].Time}, ${campeonato[qtdTimes-1].Time}
`);

console.table(campeonato)