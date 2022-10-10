document.write("Questão 11 - Escreva um programa que leia 3 valores e escreva a soma dos 2 maiores.</br></br>");

let a = 4;
let b = 1;
let c = 7;
let soma;

document.write("Os valores de entrada foram: " + a + " " + b + " " + c + "</br>");

if (a > b && b > c) {
  soma = a + b;
  document.write("A SOMA DOS 2 MAIORES e: ", soma);
}

else if (a > b && c > b) {
  soma = a + c;
  document.write("A SOMA DOS 2 MAIORES e: ", soma);
}

else if (b > c && c > a) {
  soma = b + c;
  document.write("A SOMA DOS 2 MAIORES e: ", soma);
}

else {
  document.write("ERRO!");
}
