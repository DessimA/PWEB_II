document.write("</br></br>Questão 06 </br></br>");

var num1 = 8;
var num2 = 11;
var num3 = 2;

var aux = num1;

if (num2 < num1) {
  aux = num2;
  num2 = num1;
  num1 = aux;
}

if (num3 < num1) {
  aux = num3;
  num3 = num1;
  num1 = aux;
}

if (num3 < num2) {
  aux = num3;
  num3 = num2;
  num2 = aux;
}

document.write(num1 + "-" + num2 + "-" + num3);

