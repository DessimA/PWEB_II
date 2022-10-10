document.write("Questão 02 - > Dado um número inteiro positivo n, calcular a soma dos n primeiros números inteiros positivos.</br></br>");

const num = 6;
document.write("O 'n' é igual a: " + num + "</br>");
if (num > 0) {
  let soma = 0;
  for (i = 0; i <= num; i++) {
    soma = soma + i;
  }
  document.write("Resultado: " + soma);
}