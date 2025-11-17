const readline = require('readline'); //Variaveis

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) { //funções
  return new Promise((resolve) => rl.question(question, (ans) => resolve(ans)));
}

async function main() {
  const nome = (await ask('Nome do herói: ')).trim();
  let xpInput = (await ask('XP do herói: ')).trim();

  // Remove pontos e vírgulas para facilitar a conversão (ex: "6.001" ou "6,001")
  xpInput = xpInput.replace(/\./g, '').replace(/,/g, '');
  const xp = parseInt(xpInput, 10);

  if (!nome) { //if
    console.log('Nome inválido. Reinicie e informe um nome.');
    rl.close();
    process.exit(1);
  }

  if (Number.isNaN(xp)) {
    console.log('XP inválido. Reinicie e informe um número inteiro para XP.');
    rl.close();
    process.exit(1);
  }

  let nivel = '';

  if (xp <= 1000) {
    nivel = 'Ferro ⛓️';
  } else if (xp <= 2000) {
    nivel = 'Bronze 🥉';
  } else if (xp <= 5000) {
    nivel = 'Prata 🥈';
  } else if (xp <= 6000) {
    nivel = 'Ouro 🥇';
  } else if (xp <= 7000) {
    nivel = 'Diamante 💎';
  } else if (xp <= 8000) {
    nivel = 'Platina 💠';
  } else if (xp <= 9000) {
    nivel = '"É de mais de 8 mil 🚀"';
  } else if (xp <= 10000) {
    nivel = 'Imortal 🔥';
  } else {
    nivel = 'Radiante ✨';
  }

  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
  rl.close();
}

main();
