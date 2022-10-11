document.write("Questão 14 - Calcular a quantidade dinheiro gasta por um fumante. Dados: o número de anos que ele fuma, o nº de cigarros fumados por dia e o preço de uma carteira com 20 cigarros.</br></br>");

let quantCigarro_Dia = parseInt(prompt("Cigarros fumados por dia:"));

var precoCigarro_unidade = 0.25;

let tempoFuma = parseInt(prompt("Anos fumando: "));

var gastoDia = quantCigarro_Dia * precoCigarro_unidade;
var gastoTotal = (tempoFuma * 365) * gastoDia;

document.write("Gato total com cigarro: $ ", gastoTotal);
