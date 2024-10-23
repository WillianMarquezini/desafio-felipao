const readline = require('readline');
const line = readline.createInterface({ input: process.stdin, output: process.stdout });

line.question('Quantas vitórias você teve? ', (vitorias) => {
    line.question('quantas derrotas você teve? ', (derrotas) => {
        // Variáveis
        let calcRank = calculaRank(vitorias, derrotas);
        console.log();
        console.log(`O Herói tem de saldo de ${calcRank.saldo} está no rank de nivel ${calcRank.rank}`)
        line.close();
    });
});

// função para calcular e retornar o saldo e o rank do herói, recebendo vitorias e derrotas como parametro
function calculaRank(vitorias, derrotas) {
    // constantes
    const ranks = [
        { rank: 10, rankName: "Ferro" },
        { rank: 20, rankName: "Bronze" },
        { rank: 50, rankName: "Prata" },
        { rank: 80, rankName: "Ouro" },
        { rank: 90, rankName: "Diamante" },
        { rank: 100, rankName: "Lendário" },
        { rank: Infinity, rankName: "Imortal" }
    ];

    const saldo = vitorias - derrotas;
    // Laços de repetição
    for (let i = 0; i < ranks.length; i++) {
        // Estruturas de decisões
        if (saldo <= ranks[i].rank) {
            return { "rank": ranks[i].rankName, "saldo": saldo }
        }
    }
}