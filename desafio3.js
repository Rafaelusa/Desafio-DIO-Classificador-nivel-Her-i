// Classe que representa um herói de aventura

class Heroi {
    constructor(nome, idade, tipo) {
        // Utilização de variáveis ao atribuir propriedades
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        // Utilização de variável
        let ataque = '';
        // Utilização de switch (operador de controle)
        switch (this.tipo) {
            case 'mago🧙‍♂️':
                ataque = 'usou magia 🪄.';
                break;
            case 'guerreiro🗡️':
                ataque = 'usou espada ⚔️.';
                break;
            case 'monge🥋':
                ataque = 'usou artes marciais 🤼‍♂️.';
                break;
            case 'ninja🥷':
                ataque = 'usou shuriken 💫.';
                break;
            default:
                ataque = 'atacou de forma desconhecida.';
        }
        // Utilização de template string (variáveis)
        console.log(`O ${this.tipo} ${this.nome}, herói de ${this.idade} anos, atacou usando ${ataque}`);
    }
}

// Função para criar e atacar com vários heróis
function simularBatalha() {
    // Utilização de array e variáveis
    const herois = [
        new Heroi('Merlin', 150, 'mago🧙‍♂️'),
        new Heroi('Arthur', 30, 'guerreiro🗡️'),
        new Heroi('Lee', 40, 'monge🥋'),
        new Heroi('Hanzo', 25, 'ninja🥷'),
        new Heroi('Goku', 45, 'saiyajin🐵')
    ];

    // Utilização de laço for (operador de controle)
    for (let i = 0; i < herois.length; i++) {
        herois[i].atacar();
    }
}

// Executa a simulação
simularBatalha();
