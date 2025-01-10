function inverterString(input) {
  let resultado = "";
  for (let i = input.length - 1; i >= 0; i--) {
    resultado += input[i];
  }
  return resultado;
}

function capturarEntrada() {
  if (typeof window !== "undefined" && window.prompt) {
    return prompt("Digite a string que deseja inverter:") || "defaultString";
  }

  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question("Digite a string que deseja inverter: ", (str) => {
      rl.close();
      resolve(str || "defaultString");
    });
  });
}

async function main() {
  let str = "Exemplo";

  if (typeof window === "undefined") {
    str = await capturarEntrada();
  } else {
    str = capturarEntrada();
  }

  let strInvertida = inverterString(str);
  console.log(strInvertida);
}

main();
