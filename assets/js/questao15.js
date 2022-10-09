document.write("</br></br>Questão 15 </br></br>");

let num = parseInt(prompt("Informe o numero: "));
let quantDivisores = 0;

for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    document.write(i + "<br>");

    quantDivisores++;
  }
}

document.write("Numero de dvisores: ", quantDivisores);
