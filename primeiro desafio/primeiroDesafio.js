const readline = require('readline');
const line = readline.createInterface({ input: process.stdin, output: process.stdout });

line.question('Qual o nome do seu herói? ', (nome) => {
    console.log(`Olá, ${nome}!`);
    line.question('Qual o seu nível de experiência? (entre 0 e mais que 10000): ', (xp) => {
        // Converte a entrada para um número para garantir que seja verificado corretamente
        xp = Number(xp);

        // Encerra a função se o XP não for um número ou menor que 0
        if (isNaN(xp) || xp < 0) {
            let mensagemErro = isNaN(xp) ? "Não aceitamos esse formato de entrada" : "Você não pode prosseguir tendo menos que 0."
            console.log(`XP Inválido! ${mensagemErro}`);
            line.close();
            return;
        }

        // Constantes
        const ranks = [
            { limite: 1000, nome: "Ferro" },
            { limite: 2000, nome: "Bronze" },
            { limite: 6000, nome: "Prata" },
            { limite: 7000, nome: "Ouro" },
            { limite: 8000, nome: "Platina" },
            { limite: 9000, nome: "Ascendente" },
            { limite: 10000, nome: "Imortal" },
            { limite: Infinity, nome: "Radiante" }
        ];

        // Variáveis
        let rank = "";

        // Laço de repetição
        for (let i = 0; i < ranks.length; i++) {
            // Estruturas de decisões e Operadores
            if (xp <= ranks[i].limite) {
                rank = ranks[i].nome;
                break;
            }
        }

        console.log(`O Herói ${nome} está no nível ${rank}.`);
        line.close();
    });
});
