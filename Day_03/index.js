const area = prompt(
  "Você gostaria de seguir em qual area? Front-End, ou Back-End"
)
  .replace("-", "")
  .toLowerCase();

let language = "";
if (area === "frontend")
  language = prompt("Gostaria de aprender React, ou Vue?");
if (area === "backend") language = prompt("Gostaria de aprender Java, ou C#?");

if (area != "frontend" && area != "backend") alert("Opção inválida");

const specOrFullStack = prompt(
  "Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo e se tornar Fullstack"
);

if (specOrFullStack == 1)
  alert(
    `Continue especializando-se em ${language} para dominar a area de ${area}`
  );
if (specOrFullStack == 2)
  alert(
    "Para se tornar um desenvolvedor FullStack, será necessário conhecer alguma linguagem além de: " +
      language
  );

let msg = prompt(
  "Tem mais alguma tecnologia que você gostaria de aprender? Caso sim, responda com Ok"
).toLowerCase();

while (msg === "ok") {
  let addLanguage = prompt("Qual?");
  msg = prompt(
    "Tem mais alguma tecnologia que você gostaria de aprender? Caso sim, responda com Ok"
  ).toLowerCase();
}
