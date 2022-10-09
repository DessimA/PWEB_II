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