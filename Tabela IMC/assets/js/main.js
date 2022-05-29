const form = document.querySelector("#formulario");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputPeso = event.target.querySelector("#peso");
  const inputAltura = event.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResult("Peso Invalido!", false);
    return;
  }

  if (!altura) {
    setResult("Altura inválida!", false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivel(imc);

  const msg = `Sei IMC é ${imc} (${nivelImc})`;
  setResult(msg, true);
});

function getNivel(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];
  if (imc >= 39.9) {
    return nivel[5];
  } else if (imc >= 34.9) {
    return nivel[4];
  } else if (imc >= 29.9) {
    return nivel[3];
  } else if (imc >= 24.9) {
    return nivel[2];
  } else if (imc >= 18.5) {
    return nivel[1];
  } else if (imc < 18.5) {
    return nivel[0];
  }
}

function getImc(p, a) {
  let imc = p / a ** 2;
  return imc.toFixed(2);
}

function setResult(msg, isValid) {
  const result = document.querySelector("#result");
  result.innerHTML = "";

  const p = criaP();

  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg;
  result.appendChild(p);
}

function criaP() {
  const p = document.createElement("p");
  p.classList.add("paragrafo-resultado");
  return p;
}
