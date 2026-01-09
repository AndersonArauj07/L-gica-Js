//Exercício unica - criar uma função que calcule a soma e a média de 4 números e exiba o resultado no console.

/*
A soma é:
A média é:
*/

function calcularSomaEMedia (n1, n2, n3, n4) {
let soma = n1  + n2 + n3 + n4;
console.log('A soma é:', + soma);

let media = soma / 4;
console.log('A média é:', + media)

return 'Finalizado!'

}


console.log(calcularSomaEMedia(10, 20, 30, 40));