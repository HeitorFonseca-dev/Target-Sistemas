const fs = require('fs');

fs.readFile('./dados.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    processarFaturamento(jsonData);
  } catch (parseError) {
    console.error('Erro ao interpretar o JSON:', parseError);
  }
});

function processarFaturamento(data) {
  const valoresValidos = data.filter(item => item.valor > 0).map(item => item.valor);
  const menorValor = Math.min(...valoresValidos);
  const maiorValor = Math.max(...valoresValidos);
  const mediaMensal = valoresValidos.reduce((acc, val) => acc + val, 0) / valoresValidos.length;
  const diasAcimaDaMedia = data.filter(item => item.valor > mediaMensal).length;

  console.log(`Menor valor de faturamento: R$ ${menorValor.toFixed(2)}`);
  console.log(`Maior valor de faturamento: R$ ${maiorValor.toFixed(2)}`);
  console.log(`Número de dias acima da média mensal: ${diasAcimaDaMedia}`);
}
