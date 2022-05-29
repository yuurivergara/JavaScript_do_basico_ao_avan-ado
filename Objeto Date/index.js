// const tresHoras = 60*60*3*1000;
// const umDia = 60*60*24*1000;
// const data = new Date(0 + tresHoras +umDia);
// const data = new Date(2019, 3, 20, 15, 14, 27); // ano, mes, dia, hora, minuto, segundo, ms
// console.log("dia", data.getDate());
// console.log("mes", data.getMonth()+1);
// console.log("ano", data.getFullYear());
// console.log("hora", data.getHours());
// console.log("minuto", data.getMinutes());
// console.log("segundo", data.getSeconds());
// console.log("ms", data.getMilliseconds());
// console.log("semana", data.getDay());

function zeroEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData (data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() +1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const minuto = zeroEsquerda(data.getMinutes());
    const segundo = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`
    }

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
