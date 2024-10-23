const readline = require('readline');
const line = readline.createInterface({ input: process.stdin, output: process.stdout });

class Hero {
    constructor(name, age, typeOfHero) {
        this.name = name;
        this.age = age;
        this.typeOfHero = typeOfHero.toLowerCase();
    }

    attack(typeOfHero) {
        const classes = [
            { classeNome: "mago", ataque: "magia" },
            { classeNome: "guerreiro", ataque: "espada" },
            { classeNome: "monge", ataque: "artes marciais" },
            { classeNome: "ninja", ataque: "shuriken" },
            { classeNome: "", ataque: "Sem ataque" }
        ]

        for (let i = 0; i < classes.length; i++) {
            // Estruturas de decisões
            let classe = classes[i];
            if (this.typeOfHero === classe.classeNome) {
                return `O ${this.typeOfHero} atacou usando ${classe.ataque}`;
            } else {
                return `A classe ${this.typeOfHero} não existe.`;
            }
        }
    }
}

line.question('Qual o nome do seu Herói? ', (nome) => {
    line.question('Qual a idade do seu Herói? ', (idade) => {
        line.question('Qual a classe do seu Herói? (mago, guerreiro, monge, ninja) ', (classe) => {
            let hero = new Hero(nome, idade, classe);
            console.log(hero.attack(hero.typeOfHero));
            line.close();
        })
    })
});
