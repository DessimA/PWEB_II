document.write("Questão 09 - Escreva um programa que determine se um dado número N (digitado pelo usuário) é primo ou não.</br></br>");

  let numero = 81;
  let divisores = 0;

document.write("Entrada: " + numero + "</br>");

  for (var count = 1; count <= numero; count++)
    if (numero % count == 0)
      divisores++;

  if (divisores == 2)
    document.write("Resultado :" + numero + " é primo");
  else
  document.write("Resultado: " + numero + " não é primo");



