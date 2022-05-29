function criapessoa (nome,sobrenome,idade) {
    return {nome,sobrenome,idade};
}
const pessoa1= criapessoa("Yuri","Vergara",21);
const pessoa2= criapessoa("Yan","Vergara",16);
const pessoa3= criapessoa("Elisangela","Vergara",43);
const pessoa4= criapessoa("Edmilson","Vergara",69);

console.log(pessoa1.nome,pessoa1.sobrenome,pessoa2.nome,pessoa2.sobrenome);
