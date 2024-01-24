let user = {
  name: prompt("Qual é o seu nome?"),
  age: prompt("Quantos anos você tem?"),
  programLanguage: prompt("Qual linguagem de programação você está estudando?"),
};

alert(
  `Olá ${user.name}, você tem ${user.age} anos e já está aprendendo ${user.programLanguage}`
);

let isEnjoying = prompt(
  `Você gosta de estudar ${user.programLanguage}? Responda com o número 1 para SIM ou 2 para NÃO.`
);

if (isEnjoying == 1)
  alert("Muito bom! Continue estudando e você terá muito sucesso.");

if (isEnjoying == 2)
  alert("Ahh que pena... Já tentou aprender outras linguagens?");
