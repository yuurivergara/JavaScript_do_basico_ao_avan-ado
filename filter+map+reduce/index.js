const numeros = [4, 54, 34242, 543, 123, 54, 64, 76764, 4354, 653];

const numerosPares = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((acumulador, valor) => {
    acumulador += valor;
    return acumulador;
  });
console.log(numerosPares);
