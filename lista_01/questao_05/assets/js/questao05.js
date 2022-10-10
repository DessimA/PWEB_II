document.write("Questão 05 - Dados dois números inteiros positivos, determinar o máximo divisor comum entre eles usando o algoritmo de Euclides.</br></br>");

var mdc, n1, n2, r1;
n1 = 27;
n2 = 9;

if (n1 < n2) {
  [n1, n2] = [n2, n1];
}

[r1, mdc] = [n1 % n2, n2];

while (r1 !== 0) {
  [r1, mdc] = [mdc % r1, r1];
}

document.write("O MDC dos números " + n1 + "  e " + n2 + " é " + mdc);

