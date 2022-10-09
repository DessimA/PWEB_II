document.write("</br></br>Questão 11 </br></br>");

let a = 8;
let b = 5;
let c = 12;
let soma;

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
