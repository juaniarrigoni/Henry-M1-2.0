"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  let resultado = 0;
  let digitos = num.length;
  for (let i = 0; i < digitos; i++) {
    let posicion = digitos - 1 - i;
    let elevado = 2 ** i;
    resultado += num[posicion] * elevado;
  }
  return resultado;
}

function DecimalABinario(num) {
  // tu codigo aca
  let resultado = "";
  while (num == !0) {
    num = Math.trunc(num / 2);
    resultado = (num % 2) + resultado;
  }
  return resultado;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
