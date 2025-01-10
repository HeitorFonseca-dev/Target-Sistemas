function verificaFibonacci(numero) {
  let a = 0, b = 1;

  if (numero === a || numero === b) return true;

  while (b < numero) {
    const temp = b;
    b = a + b;
    a = temp;
  }

  return b === numero;
}

const numeroTeste = 21;
const pertence = verificaFibonacci(numeroTeste);

if (pertence) {
  console.log(`${numeroTeste} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numeroTeste} não pertence à sequência de Fibonacci.`);
}
