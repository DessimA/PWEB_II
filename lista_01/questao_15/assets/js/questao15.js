document.write("Questão 15 - Calcular os divisores de um nº qualquer.</br></br>");

let num = parseInt(prompt("Digite um número: "));
let quantDivisores = 0;

document.write("Divisores do número " + num + " : ");

for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    document.write(i + " ");

    quantDivisores++;
  }
}

document.write("</br>Quantidade de divisores: ", quantDivisores);
