document.write("Questão 01 </br></br>");
const num_int = [1, 2, 3, 4, 5, 6];

num_int.forEach(element => {

  document.write(element ** 2);
  document.write("</br>");
});

document.write("</br></br>Questão 02 </br></br>");

const num = 6;
if (num > 0) {
  let soma = 0;
  for (i = 0; i <= num; i++) {
    soma = soma + i
  }
  document.write(soma);
}

document.write("</br></br>Questão 03 </br></br>");

let x = 4;
const n = 4;
let pot = 0;
if (n > 0) {
  for (i = 0; i <= n; i++) {
    res = x * x;
    pot = x * res;
  }
  document.write(pot);
}
document.write("</br></br>Questão 04 </br></br>");

function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
document.write(factorialize(5));

document.write("</br></br>Questão 05 </br></br>");
document.write("</br></br>Questão 06 </br></br>");
document.write("</br></br>Questão 07 </br></br>");
document.write("</br></br>Questão 08 </br></br>");