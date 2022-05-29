const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const total = numeros.reduce( (acumulador, valor, indice, array) => {
    acumulador = acumulador + valor;
    return acumulador;
}, 0)
console.log(total);

const pessoas = [
    { nome: "Yuri", idade: 21 },
    { nome: "Yan", idade: 20 },
    { nome: "Elisangela", idade: 49 },
    { nome: "Edmilson", idade: 54 },
  ];

const maisVelha = pessoas.reduce((acumulador,valor) => {
    if(acumulador.idade > valor.idade) {
        return acumulador;
    }
    return valor;
})

console.log(maisVelha);
