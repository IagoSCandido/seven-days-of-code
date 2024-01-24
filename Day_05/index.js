let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

let msg = prompt(
  "Gostaria de adicionar um item na sua lista de compras? Responda com 'sim' ou 'não'."
);

let item = "";
let category = "";
while (msg == "sim") {
  item = prompt("Qual item gostaria de inserir?");

  category = prompt(
    item +
      " percente a qual categoria? 1 - Frutas, 2 - Laticinios, 3 - Congelados, 4 - Doces"
  ).toLowerCase();

  if (category == 1) frutas.push(item);
  if (category == 2) laticinios.push(item);
  if (category == 3) congelados.push(item);
  if (category == 4) doces.push(item);

  msg = prompt(
    "Gostaria de adicionar mais um item na sua lista de compras? Responda com 'sim' ou 'não'."
  );
}

console.log("Lista de Compras: ");
console.log("Frutas: " + frutas);
console.log("laticinios: " + laticinios);
console.log("congelados: " + congelados);
console.log("doces: " + doces);
