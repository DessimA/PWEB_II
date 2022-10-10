document.write("Questão 10 - Escreva um programa que leia um número e exiba se ele é positivo ou negativo.</br></br>");

let numero = parseInt(prompt("Digite um valor"));

document.write("Você digitou : " + numero + "</br>");

if (numero > 0) {
  document.write("É POSITIVO" + "<br>");
} else if (numero < 0) {
  document.write("É NEGATIVO" + "<br>");
} else {
  document.write("É IGUAL A ZERO!" + "<br>")
}

