//O Código abaixo, calcula o saldo de vitórias de um herói em um jogo e classifica seu nível com base nesse saldo. 
//Nos utilizamos parametros simples para alimentar a função e retornamos um objeto com as informações relevantes. 
//Além disso, o código imprime no console o saldo de vitórias e o nível do herói.
let vitorias = 119;
let derrotas = 12;

function saldoDeVitorias(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel = '';

    if (saldoVitorias < 10) {
        nivel = 'Ferro ⛓️';
    } else if (saldoVitorias <= 20) {
        nivel = 'Bronze 🥉';
    } else if (saldoVitorias <= 50) {
        nivel = 'Prata 🥈';
    } else if (saldoVitorias <= 80) {
        nivel = 'Ouro 🥇';
    } else if (saldoVitorias <= 90) {
        nivel = 'Diamante 💎';
    } else if (saldoVitorias <= 100) {
        nivel = 'Lendário 🏆';
    } else {
        nivel = 'Imortal 🔥';
    }

    // Imprime informações no console
    console.log(`O Herói tem de saldo de ${saldoVitorias} vitórias, e está no nível ${nivel}!`);

    return { vitorias, derrotas, saldoVitorias, nivel };
}

saldoDeVitorias(vitorias, derrotas);

console.log('-----------------------------------');


// VERSÃO APRIMORADO DO CÓDIGO
//O Código abaixo, calcula o saldo de vitórias de um herói em um jogo e classifica seu nível com base nesse saldo.
//Nos utilizamos parametros simples para alimentar a função e retornamos um objeto com as informações relevantes.
//Nesta versão aprimorada, o código também informa quando o herói sobe de nível durante suas vitórias, que simulamos utilizando um loop.
//Além disso, o código imprime no console o saldo de vitórias e o nível do herói.

vitorias = 119;
derrotas = 12;
const numeroMaximoPartidas = vitorias + derrotas;

function obterNivel(saldoVitorias) {
    if (saldoVitorias < 10) {
        return 'Ferro ⛓️';
    } else if (saldoVitorias <= 20) {
        return 'Bronze 🥉';
    } else if (saldoVitorias <= 50) {
        return 'Prata 🥈';
    } else if (saldoVitorias <= 80) {
        return 'Ouro 🥇';
    } else if (saldoVitorias <= 90) {
        return 'Diamante 💎';
    } else if (saldoVitorias <= 100) {
        return 'Lendário 🏆';
    } else {
        return 'Imortal 🔥';
    }
}

let saldoVitorias = 0;
let nivelAtual = obterNivel(saldoVitorias);

for (let i = 1; i <= vitorias; i++) {
    saldoVitorias = i - derrotas;
    let novoNivel = obterNivel(saldoVitorias);
    if (novoNivel !== nivelAtual) {
        console.log(`Ao atingir ${i} vitórias (saldo: ${saldoVitorias}), o Herói subiu para o nível ${novoNivel}!`);
        nivelAtual = novoNivel;
    }
}

console.log(`O Herói terminou com saldo de ${vitorias - derrotas} vitórias, e está no nível ${obterNivel(vitorias - derrotas)}!`);