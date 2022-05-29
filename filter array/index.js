// filter, map, reduce
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// function callbackFilter(valor) {
//   return valor>10;
// }

const numfilter = numeros.filter((valor) => valor > 10);
console.log(numfilter);

const pessoas = [
  { nome: "Yuri", idade: 21 },
  { nome: "Yan", idade: 20 },
  { nome: "Elisangela", idade: 49 },
  { nome: "Edmilson", idade: 54 },
];

const nomeGrande = pessoas.filter((valor) => {
  const tam = valor.nome.length;
  return tam <= 4;
});

const startY = pessoas.filter((valor) => {
  return valor.nome.toLowerCase().startsWith("y");
});

console.log(startY);
