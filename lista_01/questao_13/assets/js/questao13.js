
document.write("Questão 13 - Construa um programa que receba um número e verifique se ele é um número triangular.(Um número é triangular quando é resultado do produto de três números consecutivos.Exemplo: 24 = 2 x 3 x 4)</br></br>");

let i, prod;
let n = parseInt(prompt("Digite o valor de N: "));
prod = 1;
i = 1;
while (prod < n) {
  prod = i * (i + 1) * (i + 2);
  i = i + 1;
}
i = i - 1;
if (prod == n) {
  document.write("É trinagular: ", n, "= ", i, "x", i + 1, "x", i + 2);
} else {
  document.write(n + " não é triangular!");
}
