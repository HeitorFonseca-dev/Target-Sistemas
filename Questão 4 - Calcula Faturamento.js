const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const faturamentoTotal = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor, 0);

const percentuais = Object.entries(faturamentoPorEstado).map(([estado, valor]) => {
  const percentual = (valor / faturamentoTotal) * 100;
  return { estado, percentual: percentual.toFixed(2) + "%" };
});

console.log("Percentuais de representação por estado:");
percentuais.forEach(({ estado, percentual }) => {
  console.log(`${estado}: ${percentual}`);
});
