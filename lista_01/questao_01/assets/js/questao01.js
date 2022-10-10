document.write("Questão 01 - Dada uma sequência de números inteiros não-nulos, seguida por 0, imprimir seus quadrados.</br></br>");
const num_int = [1, 2, 3, 4, 5, 6];
document.write("Entrada -> " + num_int);
document.write("</br>Saída -> ")
num_int.forEach(element => {

  document.write(element ** 2 + " ");

});

