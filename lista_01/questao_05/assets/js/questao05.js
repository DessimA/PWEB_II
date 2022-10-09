document.write("</br></br>Questão 05 </br></br>");

var mdc, n1, n2, r1;
n1 = 27;
n2 = 9;

if (n1 < n2) {
  [n1, n2] = [n2, n1];
}

[r1, mdc] = [n1 % n2, n2];

while (r1 !== 0) {
  [r1, mdc] = [mdc % r1, r1];
}

document.write("N1 " + n1 + " N2 " + n2 + " MDC " + mdc);

