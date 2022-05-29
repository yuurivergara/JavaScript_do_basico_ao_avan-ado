const n = [50,32,41,765,87,234,6,7,32];
const nDobro = n.map( valor => valor * 2);

console.log(nDobro);

const pessoas = [
    { nome: "Yuri", idade: 21 },
    { nome: "Yan", idade: 20 },
    { nome: "Elisangela", idade: 49 },
    { nome: "Edmilson", idade: 54 },
  ];

const nome = pessoas.map( valor =>   valor.nome);
const idade = pessoas.map(valor => ({idade: valor.idade}));
const comId = pessoas.map((valor,indice) => {
    valor.id = indice;
    return valor;
})
console.log(nome);
console.log(idade);
console.log(comId);